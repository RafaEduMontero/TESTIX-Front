import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BodyCardCollaboratorDetail from "../atomics/BodyCardCollaboratorDetail";
import { Package } from "../interfaces/package.interface";
import { collaboratorContext } from "../pages/CollaboratorPage";
import ModalDeleteCollaborator from "../atomics/ModalDeleteCollaborator";
import { Collaborator } from '../interfaces/collaborator.interface';

const CardCollaboratorDetails = () => {

    const packageCollaborator:Package = useContext(collaboratorContext);
    const {collaborator} = packageCollaborator;
    const { id, user }:Collaborator = collaborator || {};
    
    return (
        <div key={id} className="col-md-12">
            <div className="card mt-2">
                <div className="d-flex flex-column align-items-center">
                    <div className="d-flex">
                        <h1>Colaborador: {user?.name} {user?.surname}</h1><ModalDeleteCollaborator/>
                    </div>
                    <img src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" height="100px" width="100px" className="rounded" />
                </div>
                <div className="card-body">
                    <BodyCardCollaboratorDetail />
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <Link
                        className="card1-footer btn btn-primary p-2"
                        to="/">
                        Atrás <i className="bi bi-info-circle-fill"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardCollaboratorDetails;