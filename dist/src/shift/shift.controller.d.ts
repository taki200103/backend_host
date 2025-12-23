import { ShiftService } from './shift.service';
import { CreateShiftDto, UpdateShiftDto } from './shift.dto';
export declare class ShiftController {
    private readonly service;
    constructor(service: ShiftService);
    create(data: CreateShiftDto): Promise<{
        date: Date;
        shiftType: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        policeId: string;
    }>;
    findAll(startDate?: string, endDate?: string): Promise<{
        date: Date;
        shiftType: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        policeId: string;
    }[]>;
    getGuardList(): Promise<{
        fullName: string;
        phone: string;
        email: string;
        id: string;
    }[]>;
    findOne(id: string): Promise<{
        date: Date;
        shiftType: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        policeId: string;
    }>;
    update(id: string, data: UpdateShiftDto): Promise<{
        date: Date;
        shiftType: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        policeId: string;
    }>;
    remove(id: string): Promise<{
        date: Date;
        shiftType: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        policeId: string;
    }>;
}
