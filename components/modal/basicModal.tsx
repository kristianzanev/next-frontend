import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Button, ButtonToolbar, Modal } from 'rsuite';
import { ModalProps } from 'rsuite/esm/Modal/';

interface BasicModalProps extends ModalProps {
  title: string,
  paragraph: string,
  buttonText: string,
  onAccept : Function | any,
}

const BasicModal = (props: BasicModalProps) => {
  const {title, paragraph, buttonText, onAccept, ...rest} = props;

  return (
    <div className="modal-container">
      <Modal {...rest}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {paragraph}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onAccept} appearance="primary">
          {buttonText}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
  
  export default BasicModal;
