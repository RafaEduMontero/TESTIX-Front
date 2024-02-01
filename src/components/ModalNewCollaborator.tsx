import React, { ChangeEvent, ChangeEventHandler, DetailedHTMLProps, Fragment, SelectHTMLAttributes, useEffect, useState } from "react"
import "../interfaces/collaborator.interface"
import { getSkillsRequest } from "../api/skill";
import { getUsersRequest } from "../api/user";
import { Collaborator, Skill, User } from '../interfaces/collaborator.interface';
import BadgeSkill from "../atomics/BadgeSkill";
import { createCollaboratorRequest } from "../api/collaborator";

const ModalNewCollaborator = ({ updateListOfCollaborators }: { updateListOfCollaborators(collaborator: Collaborator): void }) => {
    const [skills, setSkills] = useState<Skill[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [userSelected, setUserSelected] = useState<User>();
    const [userSelectedName, setUserSelectedName] = useState<string>("");
    const [selectedsSkills, setSelectedsSkills] = useState<Skill[]>([]);
    const [isVisibleAlert, setIsVisibleAlert] = useState<boolean>(false);

    useEffect(() => {
        getSkillsRequest()
            .then((response) => response.json())
            .then((data) => setSkills(data));

        getUsersRequest()
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    const handleChangeSkill = (event: ChangeEvent<HTMLSelectElement>): void => {
        const selectedValue = event.target.value;
        const selectedSkill = JSON.parse(selectedValue);
        setSelectedsSkills([...selectedsSkills, selectedSkill]);
        setSkills(skills.filter(skill => skill.id !== selectedSkill.id));
    }

    const handleChangeUser = (event: ChangeEvent<HTMLSelectElement>): void => {
        const selectedValue = event.target.value;
        const selectedUser = JSON.parse(selectedValue);
        setUserSelected(selectedUser);
        setUserSelectedName(`${selectedUser.name} ${selectedUser.surname}`)
    }

    const createCollaborator = async () => {
        if (userSelected && selectedsSkills.length > 0) {
            try {
                const collaborator: Collaborator = {
                    user: userSelected,
                    skills: selectedsSkills
                };

                const res = await createCollaboratorRequest(collaborator);
                const data: Collaborator = await res.json();
                updateListOfCollaborators(data)
                cancel();
                var myModalEl = document.getElementById('staticBackdrop');
                var modal = bootstrap.Modal.getInstance(myModalEl)
                modal.hide();
            } catch (error) {
                console.log('El usuario ya existe')
            }
        } else {
            setIsVisibleAlert(true);
            setTimeout(function () {
                setIsVisibleAlert(false);
            }, 1500);
        }
    }

    const cancel = (): void => {
        getSkillsRequest()
            .then((response) => response.json())
            .then((data) => setSkills(data))
        setSelectedsSkills([]);
        setUserSelectedName("");
        setUserSelected({});
        setIsVisibleAlert(false);
    }

    return (
        <Fragment>
            <button type="button" className="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Nuevo Plan de Carrera
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                {isVisibleAlert ? <div className="alert alert-danger" role="alert">
                    {userSelected ? selectedsSkills.length > 0 ? '' : 'Debe seleccionar habilidades' : 'Debe seleccionar un usuario'}
                </div> : null}
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Plan de carrera</h1>
                            <button type="button" className="btn-close" onClick={cancel} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <select value={userSelectedName} onChange={e => handleChangeUser(e)} className="form-select my-2" aria-label="Default select example">
                                <option value="" selected disabled>Selecciona un Usuario</option>
                                {
                                    users.map((user) => (
                                        <option key={user.id} value={JSON.stringify(user)}>{user.name} {user.surname}</option>
                                    ))
                                }
                            </select>
                            <select value="" onChange={e => handleChangeSkill(e)} className="form-select mb-2" aria-label="Default select example">
                                <option value="" selected disabled>Selecciona una Habilidad</option>
                                {
                                    skills.map((skill) => (
                                        <option key={skill.id} value={JSON.stringify(skill)}>{skill.title}</option>
                                    ))
                                }
                            </select>
                            <h6>Usuario Seleccionado</h6>
                            <p>{userSelected ? userSelected.name : ""} {userSelected ? userSelected.surname : ""}</p>
                            <h6>Puesto</h6>
                            <p className="mb-2">{userSelected ? userSelected.position : ""}</p>
                            <h6>Habilidades Seleccionadas</h6>
                            <BadgeSkill skills={selectedsSkills} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={cancel} data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" onClick={createCollaborator}>Crear</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ModalNewCollaborator;