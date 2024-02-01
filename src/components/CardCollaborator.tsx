import React from "react";
import BadgeSkill from "../atomics/BadgeSkill";
import { Collaborator } from '../interfaces/collaborator.interface';
import { Link } from "react-router-dom";

const CardCollaborator = ({ collaborator }: { collaborator: Collaborator }) => {

    const { id, user, skills } = collaborator;

    return (
        <div key={id} className="col-md-3">
            <div className="card">
                <div className="d-flex justify-content-center">
                    <img src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" height="100px" width="100px" className="rounded" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{user?.name} {user?.surname}</h5>
                    <BadgeSkill skills={skills ? skills : []} />
                </div>
                <div className="card-footer d-flex justify-content-center">
                    <Link 
                                    className="card1-footer btn btn-info p-2" 
                                    to={`collaborator/${id}`}>
                                        Ver Información <i className="bi bi-info-circle-fill"></i>
                                </Link>
                </div>
            </div>
        </div>
    )
}

export default CardCollaborator;