import PropTypes from 'prop-types';

export const types = {
  children: PropTypes.node,
  onCancel: PropTypes.func,
  formName: PropTypes.oneOf(['create', 'delete', 'edit']),
  loading: PropTypes.bool,
  onSave: PropTypes.func,
};
