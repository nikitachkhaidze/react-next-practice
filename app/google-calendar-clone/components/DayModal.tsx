import { format } from "date-fns";
import { Day } from "../model/day";
import Event from "./events/Event";
import IconButton from "./ui/IconButton";
import { useModal } from "@/providers/ModalContext";
import { CalendarEvent } from "../model/calendarEvent";
import EventFormModal from "./event-form/EventFormModal";

type Props = {
    day: Day;
    closeModal: () => void;
}

export default function DayModal({day, closeModal}: Readonly<Props>) {
   const {open, close} = useModal()
  
  function openEventFormModal(editedEvent: CalendarEvent) {
      closeModal();
      close();

      open(
          <EventFormModal editedEvent={editedEvent} date={day.date} closeModal={close}></EventFormModal>, 
          {focusTrapOptions: {initialFocus: '#name-input'},
      });
  }

  return (
    <div className="z-10 min-w-[300px] max-w-[95%] rounded-lg bg-white p-4 transition-transform duration-250">
      <div className="mb-6 flex items-center justify-between gap-1 text-2xl">
        {format(day.date, 'P')}
        <IconButton onClick={closeModal}>&times;</IconButton>
      </div>
      <div className="flex grow flex-col gap-2 overflow-hidden">
          {day.events.map((event, index) => <Event key={index} event={event} onClick={() => openEventFormModal(event)}></Event>)}
      </div>
    </div>
  );
}