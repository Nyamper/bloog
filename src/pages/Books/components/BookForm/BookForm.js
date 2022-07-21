import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Input, Typography, DatePicker } from 'antd';
import moment from 'moment';

export const BookForm = (props) => {
  const { mode, data, name, onSave } = props;
  const { Title } = Typography;
  const { TextArea } = Input;

  const { control, handleSubmit } = useForm();

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
      {mode === 'update' && <Title level={3}>Update Book</Title>}
      <form onSubmit={handleSubmit(onSubmit)} id={name}>
        <label>Book Title</label>
        <Controller
          rules={{ required: true }}
          render={({ field }) => <Input {...field} />}
          name="title"
          control={control}
          defaultValue={data?.title || ''}
        />

        <label>Description</label>
        <Controller
          rules={{ required: true }}
          render={({ field }) => <Input {...field} />}
          name="description"
          control={control}
          defaultValue={data?.description || ''}
        />

        <label>Excerpt</label>
        <Controller
          rules={{ required: true }}
          render={({ field }) => (
            <TextArea style={{ height: '3rem' }} {...field} />
          )}
          name="excerpt"
          control={control}
          defaultValue={data?.excerpt || ''}
        />

        <label>Page Count</label>
        <Controller
          rules={{ required: true }}
          render={({ field }) => <Input {...field} />}
          name="pageCount"
          control={control}
          defaultValue={data?.pageCount}
        />

        <label>Create Date</label>
        <Controller
          control={control}
          name="publishDate"
          render={({ field }) => (
            <DatePicker
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
