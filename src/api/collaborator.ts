import { Collaborator } from "../interfaces/collaborator.interface";

const API: string = 'http://localhost:3000/';
const COLLABORATOR: string = "collaborator";


export const createCollaboratorRequest = (collaborator: Collaborator):Promise<Response> =>
    fetch(`${API}${COLLABORATOR}`, {
        method: 'POST',
        body: JSON.stringify(collaborator),
        headers: {
            'Content-Type': 'application/json'
        }
    })

export const getCollaboratorsRequest = ():Promise<Response> =>
    fetch(`${API}${COLLABORATOR}`, {
        method: 'GET',
    })

export const getCollaboratorByIdRequest = (id: string | undefined):Promise<Response> =>
    fetch(`${API}${COLLABORATOR}/${id}`, {
        method: 'GET',
    })

export const updateCollaboratorRequest = (collaborator: Collaborator):Promise<Response> =>
    fetch(`${API}${COLLABORATOR}/${collaborator.id}`, {
        method: 'PUT',
        body: JSON.stringify(collaborator),
        headers: {
            'Content-Type': 'application/json'
        }
    })

export const deleteCollaboratorByIdRequest = (id: string | undefined):Promise<Response> =>
    fetch(`${API}${COLLABORATOR}/delete/${id}`, {
        method: 'PATCH',
    })