export interface ApplicationModel {
    id?: any;
    firstname: string;
    lastname: string;
    email: string;
    gender: string;
    ethnicity: string;
    applicationDate: string;
    isDisable: boolean;
    applicationStage?: string;
    addressId?: string;
    institutionId?: string;
    createdDate?: string;
    createUserId?: string;
    modifyDate?: string;
    modifyUserId?: string; 
    isActive: boolean;
    statusId: number;
}
export interface PieChart {
    name:string[];
    value:number[];
}