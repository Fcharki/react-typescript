import { FC } from 'react';
import { Modal } from 'react-bootstrap';
import { Action } from '../lib/types';
import { Book } from '../lib/types';
import { BooksForm } from './BooksForm';

type EditModalProps = {
  showModal: boolean;
  dataToEdit: Book | undefined;
  toggleModal: () => void;
  dispatch: React.Dispatch<Action>;
  
}
const EditModal: FC<EditModalProps> = ({
  toggleModal,
  dataToEdit,
  showModal,
  dispatch
}) => {
  return (
    <Modal show={showModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Update Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BooksForm
          dispatch={dispatch}
          dataToEdit={dataToEdit}
          toggleModal={toggleModal}
        />
      </Modal.Body>
    </Modal>
  );
};
export default EditModal;