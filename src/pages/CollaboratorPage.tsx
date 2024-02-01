import React, { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Collaborator, Skill } from '../interfaces/collaborator.interface';
import { getCollaboratorByIdRequest, updateCollaboratorRequest, deleteCollaboratorByIdRequest } from "../api/collaborator";
import CardCollaboratorDetails from "../components/CardCollaboratorDetails";
import { getSkillsRequest } from "../api/skill";
import { Package } from '../interfaces/package.interface';

export const collaboratorContext = createContext<Package>({});

const CollaboratorPage = () => {

    const params = useParams<{ id: string | undefined }>();
    const [collaborator, setCollaborator] = useState<Collaborator>();
    const [skillsDB,setSkillsDB] = useState<Skill[]>()

    useEffect(() => {
        getCollaboratorByIdRequest(params.id)
            .then((response) => response.json())
            .then((data) => setCollaborator(data));

        getSkillsRequest()
            .then((response) => response.json())
            .then((data) => setSkillsDB(data));
    }, [])

    const packageCollaborator:Package = {
        collaborator,
        setCollaborator,
        skillsDB,
        setSkillsDB,
        updateCollaboratorRequest,
        deleteCollaboratorByIdRequest
    }

    if (!collaborator) {
        // Puedes renderizar algo mientras se carga el colaborador
        return <div>Cargando...</div>;
    }

    return (
        <collaboratorContext.Provider value={packageCollaborator}>
            <div className="container">
                <div className="row">
                    <CardCollaboratorDetails />
                </div>
            </div>
        </collaboratorContext.Provider>
    )
}

export default CollaboratorPage;