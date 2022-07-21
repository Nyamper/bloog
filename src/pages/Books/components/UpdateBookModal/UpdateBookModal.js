import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../../../components/Modal';
import { bookListUpdateStateSelector } from '../../selectors/bookList';
import { bookItemUpdateDataFetch } from '../../thunk/booksThunk';
import { BookForm } from '../BookForm/BookForm';

export const UpdateBookModal = ({ onSave, onCancel }) => {
  const dispatch = useDispatch();
  const { fetchData, data, loading } = useSelector(bookListUpdateStateSelector);

  useEffect(() => {
    dispatch(bookItemUpdateDataFetch(fetchData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal form="edit" onCancel={onCancel} formName="edit">
      {loading && <div>Loading</div>}
      {!loading && data && (
        <BookForm mode="edit" onSave={onSave} data={data} name="edit" />
      )}
    </Modal>
  );
};
