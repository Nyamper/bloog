import { useSelector } from 'react-redux';
import { Modal } from '../../../../components/Modal';
import { bookListDeleteStateSelector } from '../../selectors/bookList';
import { types } from './constants';

export const DeleteBookModal = ({ onSave, onCancel }) => {
  const { loading, data } = useSelector(bookListDeleteStateSelector);

  return (
    <Modal
      onCancel={onCancel}
      onSave={() => onSave(data)}
      formName="delete"
      loading={loading}
    >
      <div>
        Do you want to delete <b>{data.title}</b>?
      </div>
    </Modal>
  );
};

DeleteBookModal.propTypes = types;
