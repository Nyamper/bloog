import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Modal } from '../../../../components/Modal';
import { BookForm } from '../BookForm/BookForm';
import { bookListCreateStateSelector } from '../../selectors/bookList';

export const CreateBookModal = ({ onSave, onCancel }) => {
  CreateBookModal.propTypes = {
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
  };
  const { loading } = useSelector(bookListCreateStateSelector);
  return (
    <Modal onCancel={onCancel} formName="create" loading={loading}>
      <BookForm mode="create" onSave={onSave} name="create" loading={loading} />
    </Modal>
  );
};
