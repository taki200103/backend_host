FROM node:22-alpine AS builder

# Install openssl for Prisma
RUN apk add --no-cache openssl

WORKDIR /app

# Install deps without running postinstall (needs prisma folder)
COPY package*.json ./
COPY prisma ./prisma
RUN npm ci --ignore-scripts

# Generate Prisma client and build
RUN npx prisma generate
COPY tsconfig*.json nest-cli.json ./
COPY src ./src
RUN npm run build

# Production image
FROM node:22-alpine AS runner
RUN apk add --no-cache openssl
WORKDIR /app

# Only install production deps, skip postinstall
COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts

# Copy prisma schema and generated client
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# Copy compiled dist
COPY --from=builder /app/dist ./dist

ENV NODE_ENV=production
EXPOSE 3000

# Run migrations then start the app
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/src/main.js"]

