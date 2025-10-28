// src/invoice/invoice.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { InvoiceService } from './invoice.service';
import {
  CreateInvoiceDto,
  UpdateInvoiceDto,
  InvoiceResponseDto,
} from './invoice.dtos';

@ApiTags('Invoices')
@Controller('invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  @ApiOperation({ summary: 'Tạo hóa đơn mới' })
  @ApiResponse({
    status: 201,
    description: 'Hóa đơn đã được tạo thành công',
    type: InvoiceResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Service hoặc Resident không tồn tại',
  })
  create(
    @Body() createInvoiceDto: CreateInvoiceDto,
  ): Promise<InvoiceResponseDto> {
    return this.invoiceService.create(createInvoiceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lấy tất cả hóa đơn' })
  @ApiResponse({
    status: 200,
    description: 'Danh sách tất cả hóa đơn',
    type: [InvoiceResponseDto],
  })
  findAll(): Promise<InvoiceResponseDto[]> {
    return this.invoiceService.findAll();
  }

  @Get('resident/:residentId')
  @ApiOperation({ summary: 'Lấy tất cả hóa đơn theo Resident ID' })
  @ApiParam({ name: 'residentId', description: 'ID của cư dân' })
  @ApiResponse({
    status: 200,
    description: 'Danh sách hóa đơn của cư dân',
    type: [InvoiceResponseDto],
  })
  @ApiResponse({ status: 404, description: 'Resident không tồn tại' })
  getAllByResidentId(
    @Param('residentId') residentId: string,
  ): Promise<InvoiceResponseDto[]> {
    return this.invoiceService.getAllByResidentId(residentId);
  }

  @Get('service/:serviceId')
  @ApiOperation({ summary: 'Lấy tất cả hóa đơn theo Service ID' })
  @ApiParam({ name: 'serviceId', description: 'ID của khoản thu' })
  @ApiResponse({
    status: 200,
    description: 'Danh sách hóa đơn của khoản thu',
    type: [InvoiceResponseDto],
  })
  @ApiResponse({ status: 404, description: 'Service không tồn tại' })
  getAllByServiceId(
    @Param('serviceId') serviceId: string,
  ): Promise<InvoiceResponseDto[]> {
    return this.invoiceService.getAllByServiceId(serviceId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lấy chi tiết một hóa đơn' })
  @ApiParam({ name: 'id', description: 'ID của hóa đơn' })
  @ApiResponse({
    status: 200,
    description: 'Chi tiết hóa đơn',
    type: InvoiceResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Hóa đơn không tồn tại' })
  findOne(@Param('id') id: string): Promise<InvoiceResponseDto> {
    return this.invoiceService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Cập nhật hóa đơn' })
  @ApiParam({ name: 'id', description: 'ID của hóa đơn' })
  @ApiResponse({
    status: 200,
    description: 'Hóa đơn đã được cập nhật',
    type: InvoiceResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Hóa đơn không tồn tại' })
  update(
    @Param('id') id: string,
    @Body() updateInvoiceDto: UpdateInvoiceDto,
  ): Promise<InvoiceResponseDto> {
    return this.invoiceService.update(id, updateInvoiceDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Xóa hóa đơn' })
  @ApiParam({ name: 'id', description: 'ID của hóa đơn' })
  @ApiResponse({ status: 200, description: 'Hóa đơn đã được xóa' })
  @ApiResponse({ status: 404, description: 'Hóa đơn không tồn tại' })
  remove(@Param('id') id: string): Promise<{ message: string }> {
    return this.invoiceService.remove(id);
  }
}
