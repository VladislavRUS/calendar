import React from 'react';
import { Wrapper, Actions, StyledInput, StyledButton, StyledTextArea } from './EventEditForm.styles';
import { Form, Field } from 'react-final-form';
import { FormItem } from 'components/FormItem';
import { Event, EventFormValues } from 'store/events/types';

type Props = {
  event: Event;
  onSubmit: (values: EventFormValues) => void;
  onDelete: () => void;
};

const EventEditForm: React.FC<Props> = ({ event, onSubmit, onDelete }) => (
  <Wrapper>
    <Form
      initialValues={event}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} autoComplete="off">
          <FormItem>
            <Field name="title" render={({ input }) => <StyledInput {...input} onBlur={handleSubmit} />} />
          </FormItem>

          <FormItem>
            <Field name="time" render={({ input }) => <StyledInput type="time" {...input} onBlur={handleSubmit} />} />
          </FormItem>

          <FormItem>
            <Field
              name="description"
              render={({ input }) => <StyledTextArea {...input} onBlur={handleSubmit} rows={5} />}
            />
          </FormItem>

          <Actions>
            <StyledButton variant="text" color="#FF727A" onClick={onDelete} type="button">
              delete
            </StyledButton>
          </Actions>
        </form>
      )}
    />
  </Wrapper>
);

export default EventEditForm;
