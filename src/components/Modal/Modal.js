import { Button, Modal as AntdModal } from 'antd';
import { types } from './constants';

export const Modal = ({ children, onCancel, formName, loading, onSave }) => {
  return (
    <AntdModal
      visible={true}
      onCancel={onCancel}
      confirmLoading={loading}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button
          danger={formName === 'delete'}
          key="submit"
          type="primary"
          loading={loading}
          htmlType="submit"
          form={formName}
          onClick={onSave}
        >
          {formName.toUpperCase()}
        </Button>,
      ]}
    >
      {children}
    </AntdModal>
  );
};

Modal.defaultProps = {
  onSave: () => {},
};

Modal.propTypes = types;
