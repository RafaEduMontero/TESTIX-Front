import React, { Fragment, useEffect, useState } from "react"
import { getCollaboratorsRequest } from "../api/collaborator"
import CardCollaborator from "../components/CardCollaborator";
import ModalNewCollaborator from "../components/ModalNewCollaborator";
import { Collaborator } from "../interfaces/collaborator.interface";

const Home = () => {

    const [collaborators, setCollaborator] = useState<Collaborator[]>([]);

    useEffect(() => {
        getCollaboratorsRequest()
            .then((response) => response.json())
            .then((data) => setCollaborator(data));        
    }, [])
    
    const updateListOfCollaborators = (collaborator:Collaborator):void => {
        setCollaborator([...collaborators, collaborator]);
    }

    return (
        <div className="container">
            <ModalNewCollaborator updateListOfCollaborators={updateListOfCollaborators}/>
            <div className="row mt-4">
                {
                    collaborators.map(collaborator => (
                        <CardCollaborator key={collaborator.id} collaborator={collaborator}/>
                    ))
                }
            </div>
        </div>

    )
}

export default Home;