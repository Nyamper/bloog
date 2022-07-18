import React from 'react';

import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { StyledButton } from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from './thunk/deleteBookThunk';
import { fetchBooks } from '../../pages/Books/thunk/booksThunk';

import * as selectors from './selectors/deleteBook';

const { confirm } = Modal;

const DeleteModal = ({ bookId, title }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectors.deleteLoadingSelector);
  const error = useSelector(selectors.deleteErrorSelector);

  const showPromiseConfirm = () => {
    confirm({
      title: `Do you want to delete ${title}?`,
      icon: <ExclamationCircleOutlined />,
      onOk() {
        dispatch(removeBook(bookId));
        dispatch(fetchBooks());
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },

      onCancel() {},
    });
  };

  return (
    <>
      <StyledButton onClick={showPromiseConfirm}>Delete</StyledButton>{' '}
    </>
  );
};

export default DeleteModal;
