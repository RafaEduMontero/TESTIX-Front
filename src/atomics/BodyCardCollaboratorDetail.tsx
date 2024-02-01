import { Fragment, useContext, useEffect, useState } from "react"
import { Skill } from '../interfaces/collaborator.interface';
import { collaboratorContext } from '../pages/CollaboratorPage';
import functions from '../functions/functions';
import { Package } from "../interfaces/package.interface";

const BodyCardCollaboratorDetail = () => {

    const packageCollaborator: Package = useContext(collaboratorContext);
    const { collaborator, skillsDB } = packageCollaborator;
    const [skillsView, setSkillsView] = useState<Skill[]>([])
    const { updateSkillCollaborator, deleteSkill,addSkillCollaborator } = functions;

    useEffect(() => {
        // Verificar si collaborator.skills es un array y skillsDB está definido
        if (Array.isArray(collaborator.skills) && skillsDB) {
            const skillIds = collaborator.skills.map(skill => skill.id);
            if (skillIds) {
                const skillsFiltered = skillsDB.filter(skill => !skillIds.includes(skill.id));
                setSkillsView(skillsFiltered);
            }
        }
    }, [collaborator.skills, skillsDB]);

    const handleChangeSkill = (event: Event) => {
        const selectedValue = event.target.value;
        const selectedSkill = JSON.parse(selectedValue);
        addSkillCollaborator(packageCollaborator,selectedSkill);
        setSkillsView(skillsView.filter(skill => skill.id !== selectedSkill.id));
    }

    return (
        <Fragment>
            <h2 className="mb-2">Habilidades Asignadas</h2>
            <select value="" onChange={handleChangeSkill} className="form-select mb-2" aria-label="Default select example">
                <option value="" selected disabled>Selecciona una Habilidad</option>
                {
                    skillsView.map((skill) => (
                        <option key={skill.id} value={JSON.stringify(skill)}>{skill.title}</option>
                    ))
                }
            </select>
            {
                collaborator.skills.map((skill: Skill) => (
                    <Fragment key={skill.id}>
                        <div className="d-flex">
                            <h4>{skill.title}</h4>
                            <p className="mt-1 ms-2">Estado: <strong>{skill.state ? 'Aprobada' : 'En Curso'}</strong></p>
                            <i onClick={_ => updateSkillCollaborator(packageCollaborator, skill)} className={`bi ${skill.state ? 'bi-hand-thumbs-down-fill text-warning' : 'bi-hand-thumbs-up-fill text-success'} mt-1 ms-3 cursorPointer`}></i>
                            <i onClick={_ => deleteSkill(packageCollaborator, skill)} className="bi bi-trash3-fill mt-1 ms-4 text-danger cursorPointer"></i>
                        </div>
                        <p>{skill.description}</p>
                    </Fragment>
                ))
            }
        </Fragment>
    )
}

export default BodyCardCollaboratorDetail;