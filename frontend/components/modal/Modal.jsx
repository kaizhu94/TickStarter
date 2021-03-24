import React from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../../actions/modal_actions';
import { Link, Redirect, withRouter } from 'react-router-dom'
import { updateProjectImage } from '../../actions/project_actions'
import { deleteItem } from '../../actions/item_actions'
import { deleteReward } from '../../actions/reward_action'

function Modal( props ){
    const {modal, closeModal, errors, projectId, updateProjectImage, deleteItem, deleteReward} = props
    
    function redirect(projectId, tab){
        props.history.push(`/projects/${projectId}/edit/${tab}`)
    } 
    function redirectToCat(catNum){
        props.history.push(`/cat/${catNum}`);
        closeModal();
    } 
    function deleteImage(){
        let formData = new FormData();
        formData.append('project[title_image]', 'delete');
        updateProjectImage(projectId, formData)
            .then(()=> closeModal());
    }
    if(!modal){
        return null;
    }
    switch(modal){
        case 'discover':
            return ( 
                <div className='discover-modal' >
                    <div className='discover-modal-body'>
                        <div className='discover-head'>Sections</div>
                        <i className="fas fa-times" id="close-discover" onClick={closeModal}></i>
                        <div className='discover-section'>
                            <ul className='discover-section-ul'>
                                <li onClick={()=>redirectToCat(1)}>Arts</li>
                                <li onClick={()=>redirectToCat(2)}>Comics & Illustration</li>
                                <li onClick={()=>redirectToCat(3)}>Design & Tech</li>
                                <li onClick={()=>redirectToCat(4)}>Film</li>
                                <li onClick={()=>redirectToCat(5)}>Food & Craft</li>
                                <li onClick={()=>redirectToCat(6)}>Games</li>
                                <li onClick={()=>redirectToCat(7)}>Music</li>
                                <li onClick={()=>redirectToCat(8)}>Publishing</li>
                            </ul>
                        </div>
                    </div>
                </div> 
                );
            break;
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
                    {/* <img id="xIcon" src={window.xIcon} /> */}
                </div>
            </div> 
            );
            break;
        case 'delete-file':
            
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
        case 'deleteReward':
            
            return (
                <div className='modal-background' onClick={closeModal}>
                    <div className='unsave-modal-continer'>
                        <div className = 'unsave-upper'>
                            <h2>Delete this reward?</h2>
                            <p>This action cannot be undone.</p>
                            <button onClick={()=>deleteReward(props.rewardId)}>
                                Delete Reward
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
        deleteReward: (rewardId) => dispatch(deleteReward(rewardId)),
    }
}

export default withRouter(connect(msp, mdp)(Modal))