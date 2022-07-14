import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

import { Button, Modal, DatePicker } from 'antd';

import 'antd/dist/antd.css';

const CreateEditForm = () => {
  const { register, handleSubmit } = useForm();

  const [visible, setVisible] = useState(true);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Modal
        title="Update book information"
        visible={visible}
        onOk={handleOk}
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
export default CreateEditForm;
