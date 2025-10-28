import { PrismaService } from '../prisma/prisma.service';
export declare class ResidentnotificationService {
    private prisma;
    constructor(prisma: PrismaService);
    getNotificationsByResident(residentId: string): Promise<({
        notification: {
            info: string;
            id: string;
            createdAt: Date;
            creator: string;
        };
    } & {
        residentId: string;
        notificationId: string;
    })[]>;
    getResidentsByNotification(notificationId: string): Promise<({
        resident: {
            id: string;
            householdId: string;
            fullName: string;
            phone: string;
            password: string;
            email: string;
            role: string;
            temporaryStatus: boolean;
            idNumber: string;
            birthDate: Date;
        };
    } & {
        residentId: string;
        notificationId: string;
    })[]>;
}
