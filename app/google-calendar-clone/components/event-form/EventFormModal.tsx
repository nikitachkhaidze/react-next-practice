import { format } from "date-fns";
import CloseButton from "../ui/CloseButton";
import EventForm from "./EventForm";

type Props = {
  date: Date;
  closeModal: () => void;
}

export default function EventFormModal({date, closeModal}: Readonly<Props>) {
  return <>
      <div className="z-10 w-auto min-w-87.5 max-w-[95%] rounded-lg bg-white p-4">
        <div className="mb-6 flex items-center justify-between gap-1 text-2xl">
          <div>Add Event</div>
          <small className="text-[#555]">{format(date, 'P')}</small>
          <CloseButton onClick={closeModal}></CloseButton>
        </div>
        <EventForm closeModal={closeModal}></EventForm>
      </div>
  </>;
}