import { ResidentService } from './resident.service';
import { CreateResidentDto, UpdateResidentDto } from './resident.dto';
export declare class ResidentController {
    private readonly service;
    constructor(service: ResidentService);
    create(data: CreateResidentDto): Promise<{
        apartment: {
            id: string;
            name: string;
            contractStartDate: Date;
            contractEndDate: Date;
            ownerId: string;
            area: number;
        } | null;
        notifications: {
            residentId: string;
            notificationId: string;
        }[];
        invoices: {
            id: string;
            createdAt: Date;
            name: string;
            residentId: string;
            serviceId: number;
            money: number;
            status: string;
        }[];
        complains: {
            title: string;
            message: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            residentId: string;
            status: string;
            responseText: string | null;
            targetRole: string;
        }[];
    } & {
        apartmentId: string | null;
        fullName: string;
        phone: string;
        password: string;
        email: string;
        role: string;
        temporaryStatus: boolean;
        idNumber: string;
        birthDate: Date;
        id: string;
        approved: boolean;
    }>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        apartment: {
            id: string;
            name: string;
            contractStartDate: Date;
            contractEndDate: Date;
            ownerId: string;
            area: number;
        } | null;
        notifications: {
            residentId: string;
            notificationId: string;
        }[];
        invoices: {
            id: string;
            createdAt: Date;
            name: string;
            residentId: string;
            serviceId: number;
            money: number;
            status: string;
        }[];
        complains: {
            title: string;
            message: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            residentId: string;
            status: string;
            responseText: string | null;
            targetRole: string;
        }[];
    } & {
        apartmentId: string | null;
        fullName: string;
        phone: string;
        password: string;
        email: string;
        role: string;
        temporaryStatus: boolean;
        idNumber: string;
        birthDate: Date;
        id: string;
        approved: boolean;
    })[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__ResidentClient<({
        apartment: {
            id: string;
            name: string;
            contractStartDate: Date;
            contractEndDate: Date;
            ownerId: string;
            area: number;
        } | null;
        notifications: {
            residentId: string;
            notificationId: string;
        }[];
        invoices: {
            id: string;
            createdAt: Date;
            name: string;
            residentId: string;
            serviceId: number;
            money: number;
            status: string;
        }[];
        complains: {
            title: string;
            message: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            residentId: string;
            status: string;
            responseText: string | null;
            targetRole: string;
        }[];
    } & {
        apartmentId: string | null;
        fullName: string;
        phone: string;
        password: string;
        email: string;
        role: string;
        temporaryStatus: boolean;
        idNumber: string;
        birthDate: Date;
        id: string;
        approved: boolean;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, data: UpdateResidentDto): Promise<{
        apartment: {
            id: string;
            name: string;
            contractStartDate: Date;
            contractEndDate: Date;
            ownerId: string;
            area: number;
        } | null;
        notifications: {
            residentId: string;
            notificationId: string;
        }[];
        invoices: {
            id: string;
            createdAt: Date;
            name: string;
            residentId: string;
            serviceId: number;
            money: number;
            status: string;
        }[];
        complains: {
            title: string;
            message: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            residentId: string;
            status: string;
            responseText: string | null;
            targetRole: string;
        }[];
    } & {
        apartmentId: string | null;
        fullName: string;
        phone: string;
        password: string;
        email: string;
        role: string;
        temporaryStatus: boolean;
        idNumber: string;
        birthDate: Date;
        id: string;
        approved: boolean;
    }>;
    approve(id: string): Promise<{
        apartment: {
            id: string;
            name: string;
            contractStartDate: Date;
            contractEndDate: Date;
            ownerId: string;
            area: number;
        } | null;
        notifications: {
            residentId: string;
            notificationId: string;
        }[];
        invoices: {
            id: string;
            createdAt: Date;
            name: string;
            residentId: string;
            serviceId: number;
            money: number;
            status: string;
        }[];
        complains: {
            title: string;
            message: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            residentId: string;
            status: string;
            responseText: string | null;
            targetRole: string;
        }[];
    } & {
        apartmentId: string | null;
        fullName: string;
        phone: string;
        password: string;
        email: string;
        role: string;
        temporaryStatus: boolean;
        idNumber: string;
        birthDate: Date;
        id: string;
        approved: boolean;
    }>;
    toggleTemporaryStatus(id: string): Promise<{
        apartment: {
            id: string;
            name: string;
            contractStartDate: Date;
            contractEndDate: Date;
            ownerId: string;
            area: number;
        } | null;
        notifications: {
            residentId: string;
            notificationId: string;
        }[];
        invoices: {
            id: string;
            createdAt: Date;
            name: string;
            residentId: string;
            serviceId: number;
            money: number;
            status: string;
        }[];
        complains: {
            title: string;
            message: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            residentId: string;
            status: string;
            responseText: string | null;
            targetRole: string;
        }[];
    } & {
        apartmentId: string | null;
        fullName: string;
        phone: string;
        password: string;
        email: string;
        role: string;
        temporaryStatus: boolean;
        idNumber: string;
        birthDate: Date;
        id: string;
        approved: boolean;
    }>;
    remove(id: string): Promise<{
        apartmentId: string | null;
        fullName: string;
        phone: string;
        password: string;
        email: string;
        role: string;
        temporaryStatus: boolean;
        idNumber: string;
        birthDate: Date;
        id: string;
        approved: boolean;
    }>;
}
