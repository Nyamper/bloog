import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { StyledButton } from './styles';

const { confirm } = Modal;

const DeleteModal = ({ book, onDelete }) => {
  const showPromiseConfirm = () => {
    confirm({
      title: `Do you want to delete ${book.title}?`,
      icon: <ExclamationCircleOutlined />,
      okText: 'DELETE',
      okType: 'danger',
      onOk() {
        onDelete(book);
      },
      onCancel() {},
    });
  };

  return (
    <>
      <StyledButton onClick={showPromiseConfirm}>Delete</StyledButton>
    </>
  );
};

export default DeleteModal;
