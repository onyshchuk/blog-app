import React from 'react';
import Modal from 'react-modal';

const RemoveApprovalModal = props => {
   const onRemoveClick = () => {
      props.handleRemoveClick();
      props.closeModal();
   }
   const onNoClick = () => {
      props.closeModal();
   }
   return (
      <Modal
         className="Modal"
         overlayClassName="Overlay"
         closeTimeoutMS={200}
         isOpen={props.isOpen}
         contentLabel={`Remove '${props.selectedPostTitle}' ?`}
         appElement={document.getElementById('app')}
         onRequestClose={props.closeModal}
      >
         <h3>Remove {props.selectedPostTitle} ?</h3>
         <div className="buttons">
            <button className="button" onClick={onRemoveClick}>Remove</button>
            <button className="button" onClick={onNoClick}>no</button>
         </div>
      </Modal>
   );
}

export default RemoveApprovalModal;