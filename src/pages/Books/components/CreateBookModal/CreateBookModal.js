import { Modal } from '../../../../components/Modal';
import { BookForm } from '../BookForm/BookForm';

export const CreateBookModal = ({ onSave, onCancel }) => {
  return (
    <Modal form="create" onCancel={onCancel} formName="create">
      <BookForm mode="create" onSave={onSave} name="create" />
    </Modal>
  );
};
