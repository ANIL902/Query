
export interface Role {
    roleId: number;
    roleName: string;
  }
  
  export interface Doctor {
    contactNo: string;
    drSegmentId: string;
    firstname: string;
    isactive: number;
    lastname: string;
    login: string;
    roles: Role[];
    userId: number;
  }
  
  export interface Service {
    deptId: number;
    deptName: string;
    endToken: number;
    floorId: number;
    floorName: string;
    npEarlyCheckin: number;
    npLateCheckin: number;
    orgId: number;
    serviceArName: string;
    serviceColor: string;
    serviceEngName: string;
    serviceId: number;
    servicePrefix: string;
    serviceType: number;
    startToken: number;
    status: number;
  }
  
  export interface Department {
    deptArbName: string;
    deptId: number;
    deptName: string;
    deptType: number;
    dept_Multiple_Token: number;
    doctors: Doctor[];
    floorId: number;
    orgId: number;
    services: Service[];
    status: number;
  }
  
  export interface Floor {
    floorId:number;
    floorArbName: string;
    floorName: string;
    orgId: number;
    status:string;
  }
  
  export interface RootObject {
    floors: Floor[];
  }


  export interface IResponse {
    messages: string;
    status: boolean;
}