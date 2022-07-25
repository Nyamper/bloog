import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { Input, Typography, DatePicker } from 'antd';
import { StyledLabel, StyledError } from './styles';
import { useYupValidationResolver } from '../../../../hooks/useYup';
import moment from 'moment';
import * as yup from 'yup';

export const BookForm = ({ mode, data, name, onSave, loading = false }) => {
  const { Title } = Typography;

  BookForm.propTypes = {
    mode: PropTypes.oneOf(['create', 'edit']),
    data: PropTypes.object,
    name: PropTypes.string,
    onSave: PropTypes.func,
    loading: PropTypes.bool,
  };

  const validationSchema = yup.object({
    title: yup.string().required(`Title shouldn't be empty`),
    description: yup.string().required(`Description shouldn't be empty`),
    excerpt: yup.string().required(`Excerpt shouldn't be empty`),
    pageCount: yup
      .number()
      .required(`Page count shouldn't be empty`)
      .typeError('Must be a number'),
    publishDate: yup.date(),
  });

  const resolver = useYupValidationResolver(validationSchema);
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({ resolver });

  const onSubmit = async (values) => {
    try {
      if (!data) {
        onSave(values);
      } else {
        onSave({ ...values, id: data._id });
      }
    } catch (error) {}
  };

  return (
    <>
      {mode === 'create' && <Title level={3}>Create Book</Title>}
      {mode === 'edit' && <Title level={3}>Update Book</Title>}
      <form onSubmit={handleSubmit(onSubmit)} id={name}>
        <StyledLabel>Book Title</StyledLabel>
        <Controller
          render={({ field }) => <Input readOnly={loading} {...field} />}
          name="title"
          control={control}
          defaultValue={data?.title || ''}
        />
        {errors.title && <StyledError>{errors.title.message}</StyledError>}
        <StyledLabel>Description</StyledLabel>
        <Controller
          render={({ field }) => <Input readOnly={loading} {...field} />}
          name="description"
          control={control}
          defaultValue={data?.description || ''}
        />
        {errors.description && (
          <StyledError>{errors.description.message}</StyledError>
        )}
        <StyledLabel>Excerpt</StyledLabel>
        <Controller
          render={({ field }) => <Input readOnly={loading} {...field} />}
          name="excerpt"
          control={control}
          defaultValue={data?.excerpt || ''}
        />
        {errors.excerpt && <StyledError>{errors.excerpt.message}</StyledError>}
        <StyledLabel>Page Count</StyledLabel>
        <Controller
          render={({ field }) => <Input readOnly={loading} {...field} />}
          name="pageCount"
          control={control}
          defaultValue={data?.pageCount}
        />
        {errors.pageCount && (
          <StyledError>{errors.pageCount.message}</StyledError>
        )}
        <StyledLabel>Date</StyledLabel>
        <Controller
          control={control}
          name="publishDate"
          render={({ field }) => (
            <DatePicker
              inputReadOnly
              disabled={loading}
              format={'DD/MM/YYYY'}
              defaultValue={moment(data?.publishDate) || moment()}
              onChange={(date) => field.onChange(date._d)}
              selected={field.value}
            />
          )}
        />
      </form>
    </>
  );
};
