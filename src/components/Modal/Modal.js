import PropTypes from 'prop-types';
import { Button, Modal as AntdModal } from 'antd';

export const Modal = ({ children, onCancel, formName, loading, onSave }) => {
  Modal.propTypes = {
    children: PropTypes.node,
    onCancel: PropTypes.func,
    formName: PropTypes.oneOf(['create', 'delete', 'edit']),
    loading: PropTypes.bool,
    onSave: PropTypes.func,
  };

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
