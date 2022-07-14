import React, { useEffect } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

const { confirm } = Modal;

const DeleteModal = ({ bookId, title }) => {
  const showPromiseConfirm = () => {
    confirm({
      title: `Do you want to delete ${title}?`,
      icon: <ExclamationCircleOutlined />,

      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },

      onCancel() {},
    });
  };
  useEffect(() => showPromiseConfirm(), []);

  return;
};

export default DeleteModal;
