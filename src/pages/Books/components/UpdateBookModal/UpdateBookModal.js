import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../../../../components/Modal';
import { bookListUpdateStateSelector } from '../../selectors/bookList';
import { bookItemUpdateDataFetch } from '../../thunk/booksThunk';
import { BookForm } from '../BookForm/BookForm';
import { Spin } from 'antd';
import { StyledContainer } from './styles';
import { types } from './constants';

export const UpdateBookModal = ({ onSave, onCancel }) => {
  const dispatch = useDispatch();
  const { fetchData, data, loading, secondLoading } = useSelector(
    bookListUpdateStateSelector
  );

  useEffect(() => {
    dispatch(bookItemUpdateDataFetch(fetchData));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <Modal onCancel={onCancel} formName="edit" loading={secondLoading}>
      {loading && (
        <StyledContainer>
          <Spin size="large" />
        </StyledContainer>
      )}
      {!loading && data && (
        <BookForm
          mode="edit"
          onSave={onSave}
          data={data}
          name="edit"
          loading={secondLoading}
        />
      )}
    </Modal>
  );
};

UpdateBookModal.propTypes = types;
