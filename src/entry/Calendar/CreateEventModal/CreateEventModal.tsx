import React from 'react';
import { Modal } from 'components/Modal';
import { ApplicationState } from 'store';
import { isCreateEventModalOpenedSelector, createEventDateSelector } from 'store/events/selectors';
import { closeCreateEventModalAction, createEventAction } from 'store/events/actions';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { StyledInput, StyledTextArea } from './CreateEventModal.styles';
import { FormItem } from 'components/FormItem';
import { FieldLabel } from 'components/FieldLabel';
import { Button } from 'components/Button';
import { ValidationErrors } from 'final-form';
import format from 'date-fns/format';
import { EventFormValues } from 'store/events/types';

const mapStateToProps = (state: ApplicationState) => ({
  isCreateEventModalOpened: isCreateEventModalOpenedSelector(state),
  createEventDate: createEventDateSelector(state),
});

type StateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      closeCreateEventModal: closeCreateEventModalAction,
      createEvent: createEventAction,
    },
    dispatch
  );

type DispatchProps = ReturnType<typeof mapDispatchToProps>;

type Props = StateProps & DispatchProps;

type FormValues = {
  time?: string;
  title?: string;
  description?: string;
};

const validateForm = (values: FormValues) => {
  const errors: ValidationErrors = {};

  if (!values.time) {
    errors.time = 'Time is required';
  }

  if (!values.title) {
    errors.title = 'Title is required';
  }

  if (!values.description) {
    errors.description = 'Description is required';
  }

  return errors;
};

const CreateEventModal: React.FC<Props> = ({
  createEventDate,
  isCreateEventModalOpened,
  closeCreateEventModal,
  createEvent,
}) => {
  const onSubmit = (values: EventFormValues) => {
    createEvent(values);
  };

  const title = 'New event at ' + (createEventDate ? format(createEventDate, 'd MMMM, yyyy') : '');

  return (
    <Modal isOpened={isCreateEventModalOpened} onClose={closeCreateEventModal} title={title}>
      <Form
        onSubmit={onSubmit}
        initialValues={{
          time: '12:00',
        }}
        validate={validateForm}
        render={({ handleSubmit, hasValidationErrors }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            <FormItem>
              <FieldLabel htmlFor="title">Enter title</FieldLabel>

              <Field name="title" render={({ input }) => <StyledInput id="title" placeholder="Title" {...input} />} />
            </FormItem>

            <FormItem>
              <FieldLabel htmlFor="time">Enter time</FieldLabel>

              <Field name="time" type="time" render={({ input }) => <StyledInput id="time" {...input} />} />
            </FormItem>

            <FormItem>
              <FieldLabel htmlFor="description">Enter description</FieldLabel>

              <Field
                name="description"
                render={({ input }) => (
                  <StyledTextArea id="description" placeholder="Description" {...input} rows={5} />
                )}
              />
            </FormItem>

            <Modal.Actions>
              <Button variant="text" color="#2591ED" type="submit" disabled={hasValidationErrors}>
                Save
              </Button>
            </Modal.Actions>
          </form>
        )}
      />
    </Modal>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventModal);
