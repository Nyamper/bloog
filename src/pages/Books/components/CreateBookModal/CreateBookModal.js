import { useSelector } from 'react-redux';
import { Modal } from '../../../../components/Modal';
import { BookForm } from '../BookForm/BookForm';
import { bookListCreateStateSelector } from '../../selectors/bookList';
import { types } from './constants';

export const CreateBookModal = ({ onSave, onCancel }) => {
  const { loading } = useSelector(bookListCreateStateSelector);
  return (
    <Modal onCancel={onCancel} formName="create" loading={loading}>
      <BookForm mode="create" onSave={onSave} name="create" loading={loading} />
    </Modal>
  );
};

CreateBookModal.propTypes = types;
