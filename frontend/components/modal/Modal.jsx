import React from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../../actions/modal_actions';
import { Link, Redirect, withRouter } from 'react-router-dom'

function Modal( props ){
    const {modal, closeModal, errors, projectId} = props
    debugger
    function redirect(projectId, tab){
        props.history.push(`/projects/${projectId}/edit/${tab}`)
    } 
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
        case 'unsave-tab-0':
        debugger
        return (
            <div className='modal-background' onClick={closeModal}>
                <div className='unsave-modal-continer'>
                    <div>
                        <h2>Your changes are not saved</h2>
                        <p>If you continue, you will lose all unsaved changes. To save all changes, go back and press "Save".</p>
                        <button onClick={()=>redirect(projectId, 0)}>
                            No need to save, continue
                        </button>
                    </div>
                    <div>
                        <p onClick={closeModal}>Go back and save</p>
                    </div>
                </div>
            </div>
        )
        case 'unsave-tab-1':
            debugger
            return (
                <div className='modal-background' onClick={closeModal}>
                    <div className='unsave-modal-continer'>
                        <div>
                            <h2>Your changes are not saved</h2>
                            <p>If you continue, you will lose all unsaved changes. To save all changes, go back and press "Save".</p>
                            <button onClick={()=>redirect(projectId, 1)}>
                                No need to save, continue
                            </button>
                        </div>
                        <div>
                            <p onClick={closeModal}>Go back and save</p>
                        </div>
                    </div>
                </div>
            )
        case 'unsave-tab-2':
            debugger
            return (
                <div className='modal-background' onClick={closeModal}>
                    <div className='unsave-modal-continer'>
                        <div>
                            <h2>Your changes are not saved</h2>
                            <p>If you continue, you will lose all unsaved changes. To save all changes, go back and press "Save".</p>
                            <button onClick={()=>redirect(projectId, 2)}>
                                No need to save, continue
                            </button>
                        </div>
                        <div>
                            <p onClick={closeModal}>Go back and save</p>
                        </div>
                    </div>
                </div>
            )
        case 'unsave-tab-3':
            debugger
            return (
                <div className='modal-background' onClick={closeModal}>
                    <div className='unsave-modal-continer'>
                        <div>
                            <h2>Your changes are not saved</h2>
                            <p>If you continue, you will lose all unsaved changes. To save all changes, go back and press "Save".</p>
                            <button onClick={()=>redirect(projectId, 3)}>
                                No need to save, continue
                            </button>
                        </div>
                        <div>
                            <p onClick={closeModal}>Go back and save</p>
                        </div>
                    </div>
                </div>
            )
        default:
            return null;
    }
    
    
}


const msp =state =>{
    debugger
    return {
        modal: state.ui.modal,
        errors: state.errors.session,
        projectId: Object.keys(state.entities.projects)[0]
    }
}

const mdp =dispatch =>{
    return {
        closeModal: ()=>dispatch(closeModal())
    }
}

export default withRouter(connect(msp, mdp)(Modal))