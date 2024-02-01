export interface User{
    id?: string;
    email?: string;
    name?:string;
    surname?:string;
    age?: number;
    position?:string;
    createdAt?: Date;
    updatedAt?: Date;
    isDeleted?:boolean;
}

export interface Skill{
    id: string;
    title:string;
    description?:string;
    state:boolean;
    createdAt?: Date;
    updatedAt?: Date;
    isDeleted?:boolean;
}

export interface Collaborator{
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    isDeleted?:boolean;
    user?:User | undefined;
    skills?:Skill[] | undefined;
}