export interface employee{
    id: number,
    fname: string,
    lname: string,
    email: string,
    role: any,
    contact: number,
    roleid: number,
    salary: number,
    isactive: boolean,
    currency: any,
    currencyid: number,
}

export interface employeeRoles{
    id: number,
    name: string,
}

export interface currency{
    id: number,
    name: string,
    symbol: string,
}