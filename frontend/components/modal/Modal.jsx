import React from 'react';
import {connect} from 'react-redux';
import {closeModal} from '../../actions/modal_actions';

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