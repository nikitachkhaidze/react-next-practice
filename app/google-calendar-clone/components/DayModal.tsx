import { format } from "date-fns";
import { Day } from "../model/day";
import Event from "./events/Event";
import CloseButton from "./ui/CloseButton";

type Props = {
    day: Day;
    closeModal: () => void;
}

export default function DayModal({day, closeModal}: Readonly<Props>) {
  return (
    <div className="z-10 min-w-[300px] max-w-[95%] rounded-lg bg-white p-4 transition-transform duration-250">
      <div className="mb-6 flex items-center justify-between gap-1 text-2xl">
        {format(day.date, 'P')}
        <CloseButton onClick={closeModal}></CloseButton>
      </div>
      <div className="flex grow flex-col gap-2 overflow-hidden">
          {day.events.map((event, index) => <Event key={index} event={event}></Event>)}
        {/* <button
          type="button"
          className={`${eventClassName} rounded-sm bg-[hsl(150,80%,30%)] px-1 py-[0.15rem] text-white`}
        >
          <div className="overflow-hidden">Short</div>
        </button> */}
      </div>
    </div>
  );
}