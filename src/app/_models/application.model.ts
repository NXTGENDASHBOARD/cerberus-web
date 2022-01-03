export interface ApplicationModel {
    Id?: number;
    Firstname: string;
    Lastname: string;
    Email: string;
    Gender: string;
    Ethnicity: string;
    ApplicationDate: string;
    IsDisable: boolean;
    ApplicationStage?: string;
    AddressId?: string;
    InstitutionId?: string;
    CreatedDate?: string;
    CreateUserId?: string;
    ModifyDate?: string;
    ModifyUserId?: string; 
    IsActive: boolean;
    StatusId: number;
}