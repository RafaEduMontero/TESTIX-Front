import React, { Fragment, useContext } from 'react';
import { collaboratorContext } from '../pages/CollaboratorPage';
import { Package } from '../interfaces/package.interface';
import functions from '../functions/functions';
import { useNavigate } from 'react-router-dom';
import { Collaborator } from '../interfaces/collaborator.interface';

const ModalDeleteCollaborator = () => {

    const packageCollaborator: Package = useContext(collaboratorContext);
    const { collaborator } = packageCollaborator
    const { deleteCollaborator } = functions;
    const { id }:Collaborator = collaborator || {};
    const navigate = useNavigate();

    const handleButtonClick = (response: boolean) => {

        if (response) {
            deleteCollaborator(packageCollaborator, id)
            var myModalEl = document.getElementById('staticBackdrop');
            var modal = bootstrap.Modal.getInstance(myModalEl)
            modal.hide();
            navigate("/");
        }
        // Realiza acciones adicionales según la respuesta del modal
    };

    return (
        <Fragment>
            {/* <button type="button" className="btn btn-primary mt-4" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Nuevo Plan de Carrera
            </button> */}
            <i className="btn bi mt-3 ms-2 text-danger bi-file-earmark-x cursorPointer" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Atención</h1>
                            <button type="button" className="btn-close" onClick={_ => handleButtonClick(false)} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ¿Estás seguro de eliminar el Colaborador?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={_ => handleButtonClick(false)} data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" onClick={_ => handleButtonClick(true)}>Si</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default ModalDeleteCollaborator;