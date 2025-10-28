// src/invoice/dto/invoice.dto.ts
import { IsString, IsNumber, IsUUID, IsNotEmpty } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

// DTO để tạo hóa đơn mới
export class CreateInvoiceDto {
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440000' })
  @IsUUID()
  @IsNotEmpty()
  serviceId: string;

  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440001' })
  @IsUUID()
  @IsNotEmpty()
  residentId: string;

  @ApiProperty({ example: 'Phí quản lý tháng 10/2025' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 500000 })
  @IsNumber()
  @IsNotEmpty()
  money: number;
}

// DTO để cập nhật hóa đơn
export class UpdateInvoiceDto extends PartialType(CreateInvoiceDto) {}

// DTO response trả về
export class InvoiceResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  serviceId: string;

  @ApiProperty()
  residentId: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  money: number;

  @ApiProperty({ required: false })
  service?: {
    id: string;
    name: string;
    info: string;
    calculate: string;
  };

  @ApiProperty({ required: false })
  resident?: {
    id: string;
    fullName: string;
    email: string;
    phone: string;
  };
}
