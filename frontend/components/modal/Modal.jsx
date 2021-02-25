import React from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../../actions/modal_actions';
import { Link } from 'react-router-dom'

function Modal( {modal, closeModal, errors} ){
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
        case 'unsave':
            return (
                <div className='modal-background' onClick={closeModal}>
                    <div className='unsave-modal-continer'>
                        <div>
                            <h2>Your changes are not saved</h2>
                            <p>If you continue, you will lose all unsaved changes. To save all changes, go back and press "Save".</p>
                            <button onClick={closeModal}>
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
    return {
        modal: state.ui.modal,
        errors: state.errors.session,
    }
}

const mdp =dispatch =>{
    return {
        closeModal: ()=>dispatch(closeModal())
    }
}

export default connect(msp, mdp)(Modal)