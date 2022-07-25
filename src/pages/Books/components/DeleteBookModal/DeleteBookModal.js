import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Modal } from '../../../../components/Modal';
import { bookListDeleteStateSelector } from '../../selectors/bookList';

export const DeleteBookModal = ({ onSave, onCancel }) => {
  const { loading, data } = useSelector(bookListDeleteStateSelector);
  DeleteBookModal.propTypes = {
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
  };

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
