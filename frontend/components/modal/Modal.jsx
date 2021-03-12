import React from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../../actions/modal_actions';
import { Link, Redirect, withRouter } from 'react-router-dom'
import { updateProjectImage } from '../../actions/project_actions'
import { deleteItem } from '../../actions/item_actions'

function Modal( props ){
    const {modal, closeModal, errors, projectId, updateProjectImage, deleteItem} = props
    // debugger
    function redirect(projectId, tab){
        props.history.push(`/projects/${projectId}/edit/${tab}`)
    } 
    function deleteImage(){
        let formData = new FormData();
        formData.append('project[title_image]', 'delete');
        updateProjectImage(projectId, formData)
            .then(()=> closeModal());
    }
    // function deleteItem(){}
    if(!modal){
        return null;
    }
    switch(modal){
        case 'errors':
            const errorsArr = errors.map((error,i) =>{
                return (
                    <li key={`errors-${i}`} id='session-error-item'>{error}</li>
                )
            })
            return ( 
            <div className='modal-background' onClick={closeModal}>
                <div className='modal-child-container'>
                    <div className='modal-child' onClick={event => event.stopPropagation()}>
                        <ul id='session-error-ul'>
                            {errorsArr}
                        </ul>
                    </div>
                    <img id="xIcon" src={window.xIcon} />
                </div>
            </div> 
            );
            break;
        case 'delete-file':
            // debugger
            return (
                <div className='modal-background' onClick={closeModal}>
                    <div className='unsave-modal-continer'>
                        <div className = 'unsave-upper'>
                            <h2>Are you sure?</h2>
                            <p>This action cannot be undone.</p>
                            <button onClick={()=>deleteImage()}>
                                Delete Image
                            </button>
                        </div>
                        <div className = 'unsave-lower'>
                            <p onClick={closeModal}>Close</p>
                        </div>
                    </div>
                </div>
            )
            break;
        case 'deleteItem':
                return (
                    <div className='modal-background' onClick={closeModal}>
                        <div className='unsave-modal-continer'>
                            <div className = 'unsave-upper'>
                                <h2>Delete this item?</h2>
                                {
                                    props.rewards === 0 ? (
                                        <div>
                                            <p>{props.item_name} is not used in any of your rewards.</p>
                                            <button onClick={()=>deleteItem(props.itemId)}>
                                                Delete Item
                                            </button>
                                        </div>
                                    ) : (
                                        <div>
                                            <p>{props.item_name} will be deleted from {props.rewards} of your rewards. This action cannot be undone.</p>
                                            <button onClick={()=>deleteItem(props.itemId)}>
                                                Delete from {props.rewards} rewards
                                            </button>
                                        </div>
                                    )
                                }
                            </div>
                            <div className = 'unsave-lower'>
                                <p onClick={closeModal}>No, never mind</p>
                            </div>
                        </div>
                    </div>
                )
                break;
        case 'unsave-tab-0':
        // debugger
        return (
            <div className='modal-background' onClick={closeModal}>
                <div className='unsave-modal-continer'>
                    <div className = 'unsave-upper'>
                        <h2>Your changes are not saved</h2>
                        <p>If you continue, you will lose all unsaved changes. To save all changes, go back and press "Save".</p>
                        <button onClick={()=>redirect(projectId, 0)}>
                            No need to save, continue
                        </button>
                    </div>
                    <div className = 'unsave-lower'>
                        <p onClick={closeModal}>Go back and save</p>
                    </div>
                </div>
            </div>
        )
        break;
        case 'unsave-tab-1':
            // debugger
            return (
                <div className='modal-background' onClick={closeModal}>
                    <div className='unsave-modal-continer'>
                        <div className = 'unsave-upper'>
                            <h2>Your changes are not saved</h2>
                            <p>If you continue, you will lose all unsaved changes. To save all changes, go back and press "Save".</p>
                            <button onClick={()=>redirect(projectId, 1)}>
                                No need to save, continue
                            </button>
                        </div>
                        <div className = 'unsave-lower'>
                            <p onClick={closeModal}>Go back and save</p>
                        </div>
                    </div>
                </div>
            )
            break;
        case 'unsave-tab-2':
            // debugger
            return (
                <div className='modal-background' onClick={closeModal}>
                    <div className='unsave-modal-continer'>
                        <div className = 'unsave-upper'>
                            <h2>Your changes are not saved</h2>
                            <p>If you continue, you will lose all unsaved changes. To save all changes, go back and press "Save".</p>
                            <button onClick={()=>redirect(projectId, 2)}>
                                No need to save, continue
                            </button>
                        </div>
                        <div className = 'unsave-lower'>
                            <p onClick={closeModal}>Go back and save</p>
                        </div>
                    </div>
                </div>
            )
            break;
        case 'unsave-tab-3':
            // debugger
            return (
                <div className='modal-background' onClick={closeModal}>
                    <div className='unsave-modal-continer'>
                        <div className = 'unsave-upper'>
                            <h2>Your changes are not saved</h2>
                            <p>If you continue, you will lose all unsaved changes. To save all changes, go back and press "Save".</p>
                            <button onClick={()=>redirect(projectId, 3)}>
                                No need to save, continue
                            </button>
                        </div>
                        <div className = 'unsave-lower'>
                            <p onClick={closeModal}>Go back and save</p>
                        </div>
                    </div>
                </div>
            )
            break;
        default:
            return null;
    }
    
    
}


const msp =(state, ownprops) =>{
    // debugger
    return {
        modal: state.ui.modal,
        errors: state.errors.session,
        projectId: Object.keys(state.entities.projects)[0]
    }
}

const mdp =dispatch =>{
    return {
        closeModal: ()=>dispatch(closeModal()),
        updateProjectImage: (id, FormData) => dispatch(updateProjectImage(id, FormData)),
        deleteItem: (itemId) => dispatch(deleteItem(itemId)),
    }
}

export default withRouter(connect(msp, mdp)(Modal))