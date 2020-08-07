import React, { useState } from 'react';
import { Wrapper, Time, Title } from './DayEvent.styles';
import { Event, EventFormValues } from 'store/events/types';
import Popover, { ArrowContainer } from 'react-tiny-popover';
import { EventEditForm } from './EventEditForm';
import { bindActionCreators, Dispatch } from 'redux';
import { deleteEventsAction, updateEventAction } from 'store/events/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      updateEvent: updateEventAction,
      deleteEvents: deleteEventsAction,
    },
    dispatch
  );

type DispatchProps = ReturnType<typeof mapDispatchToProps>;

type OwnProps = {
  event: Event;
};

type Props = OwnProps & DispatchProps;

const DayEvent: React.FC<Props> = ({ event, updateEvent, deleteEvents }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const openPopover = () => setIsPopoverOpen(true);
  const closePopover = () => setIsPopoverOpen(false);

  const onSubmit = (values: EventFormValues) => updateEvent(event.id, values);

  const onDelete = () => deleteEvents([event.id]);

  return (
    <Popover
      isOpen={isPopoverOpen}
      position="right"
      containerStyle={{
        overflow: 'visible',
      }}
      content={({ position, targetRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          targetRect={targetRect}
          popoverRect={popoverRect}
          arrowColor="#fff"
          arrowSize={10}
        >
          <EventEditForm event={event} onSubmit={onSubmit} onDelete={onDelete} />
        </ArrowContainer>
      )}
      onClickOutside={closePopover}
    >
      <Wrapper onClick={openPopover}>
        <Time>{event.time}</Time>
        <Title title={event.title}>{event.title}</Title>
      </Wrapper>
    </Popover>
  );
};

export default connect(null, mapDispatchToProps)(DayEvent);
