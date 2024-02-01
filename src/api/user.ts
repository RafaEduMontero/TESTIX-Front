import { User } from "../interfaces/collaborator.interface";

const API:string = 'http://localhost:3000/';
const USERS:string = "users";


export const createUserRequest = (user:User) =>
    fetch(`${API}${USERS}`,{
        method: 'POST',
        body: JSON.stringify(user),
        headers:{
            'Content-Type': 'application/json'
        }
    })

export const getUsersRequest = () => 
    fetch(`${API}${USERS}`,{
        method: 'GET',
    })