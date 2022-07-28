import PropTypes from 'prop-types';
import * as yup from 'yup';

export const types = {
  mode: PropTypes.oneOf(['create', 'edit']),
  data: PropTypes.object,
  name: PropTypes.string,
  onSave: PropTypes.func,
  loading: PropTypes.bool,
};

export const validationSchema = yup.object({
  title: yup.string().required(`Title shouldn't be empty`),
  description: yup.string().required(`Description shouldn't be empty`),
  excerpt: yup.string().required(`Excerpt shouldn't be empty`),
  pageCount: yup
    .number()
    .required(`Page count shouldn't be empty`)
    .typeError('Must be a number'),
  publishDate: yup.date(),
});
