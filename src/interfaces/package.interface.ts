import { Dispatch, SetStateAction } from "react";
import { Collaborator, Skill } from "./collaborator.interface";

export interface Package {
    collaborator?: Collaborator;
    setCollaborator?: Dispatch<SetStateAction<Collaborator | undefined>> ;
    skillsDB?: Skill[];
    setSkillsDB?: Dispatch<SetStateAction<Skill[] | undefined>> ;
    updateCollaboratorRequest?: (collaborator: Collaborator) => Promise<Response>;
    deleteCollaboratorByIdRequest?: (id: string) => Promise<Response>;
  }