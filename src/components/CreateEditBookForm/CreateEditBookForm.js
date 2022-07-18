import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useForm } from 'react-hook-form';

import * as selectors from './selector/createEditBook';

import { hideCreateEditModal } from './reducers/createEditModalSlice';
import { createBook, editBook } from './thunk/createEditThunk';
import { fetchBooks } from '../../pages/Books/thunk/booksThunk';

import 'antd/dist/antd.css';
import { Modal } from 'antd';

const CreateEditFormModal = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const show = useSelector(selectors.createShowSelector);
  const title = useSelector(selectors.titleSelector);
  const isLoading = useSelector(selectors.createEditLoadingSelector);
  const isError = useSelector(selectors.createEditErrorSelector);
  const bookId = useSelector(selectors.bookIdSelector);
  const isCreate = useSelector(selectors.isCreateSelector);

  const [confirmLoading, setConfirmLoading] = useState(isLoading);

  const handleOk = (data) => {
    setConfirmLoading(isLoading);
    console.log(isCreate);
    if (isCreate) {
      dispatch(createBook(data));
    } else {
      dispatch(editBook({ bookId, data }));
    }

    setTimeout(() => {
      dispatch(fetchBooks());
      setConfirmLoading(isLoading);
      dispatch(hideCreateEditModal());
    }, 1);
  };

  const handleCancel = () => {
    dispatch(hideCreateEditModal());
  };

  return (
    <>
      <Modal
        title={title}
        visible={show}
        onOk={handleSubmit((data) => {
          handleOk(data);
        })}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <form>
          <input
            {...register('title', { required: true })}
            placeholder="Title"
          />
          <input
            {...register('description', { required: true })}
            placeholder="Description"
          />
          <input
            {...register('pageCount', { required: true })}
            placeholder="Page count"
          />
          <input
            {...register('excerpt', { required: true })}
            placeholder="Excerpt"
          />
          <input
            {...register('publishDate', { required: true })}
            placeholder="Publish date"
          />
        </form>
      </Modal>
    </>
  );
};
export default CreateEditFormModal;
