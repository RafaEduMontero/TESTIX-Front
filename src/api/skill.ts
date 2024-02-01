import { Skill } from "../interfaces/collaborator.interface";

const API: string = 'http://localhost:3000/';
const SKILLS: string = "skills";


export const createSkillRequest = (skill: Skill) =>
    fetch(`${API}${SKILLS}`, {
        method: 'POST',
        body: JSON.stringify(skill),
        headers: {
            'Content-Type': 'application/json'
        }
    })

export const getSkillsRequest = () =>
    fetch(`${API}${SKILLS}`, {
        method: 'GET',
    })

export const deleteSkillByIdRequest = (id: string) =>
    fetch(`${API}${SKILLS}/delete/${id}`, {
        method: 'PATCH',
    })