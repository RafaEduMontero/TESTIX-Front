import { Collaborator, Skill } from '../interfaces/collaborator.interface';
import { Package } from '../interfaces/package.interface';
const functions = {

    updateSkillCollaborator: (packageCollaborator: Package, skill: Skill): void => {

        const { collaborator, setCollaborator, updateCollaboratorRequest } : Package = packageCollaborator;

        skill.state = !skill.state;

        const updatedSkills = collaborator?.skills?.map((s) =>
            s.id === skill.id ? skill : s
        );

        const updatedCollaborator: Collaborator = {
            ...collaborator,
            skills: updatedSkills,
        };

        setCollaborator(updatedCollaborator);
        updateCollaboratorRequest(updatedCollaborator);
    },
    addSkillCollaborator: (packageCollaborator: Package, skill: Skill): void => {

        const { collaborator, setCollaborator, updateCollaboratorRequest } = packageCollaborator;

        const updatedSkills = [...collaborator?.skills,skill];

        const updatedCollaborator: Collaborator = {
            ...collaborator,
            skills: updatedSkills,
        };

        setCollaborator(updatedCollaborator);
        updateCollaboratorRequest(updatedCollaborator);
    },
    deleteSkill: (packageCollaborator: Package, skillProp: Skill): void => {
        const { collaborator, setCollaborator, updateCollaboratorRequest } = packageCollaborator;
        const updatedSkills = collaborator?.skills?.filter(skill => skill.id !== skillProp.id);

        const updatedCollaborator: Collaborator = {
            ...collaborator,
            skills: updatedSkills,
        };

        setCollaborator(updatedCollaborator);
        updateCollaboratorRequest(updatedCollaborator);
    },
    deleteCollaborator:(packageCollaborator: Package,id:string | undefined):void => {
        const { deleteCollaboratorByIdRequest } : Package = packageCollaborator;
        deleteCollaboratorByIdRequest(id);
    }
}

export default functions;