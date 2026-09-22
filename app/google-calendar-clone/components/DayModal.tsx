import { format } from "date-fns";
import { Day } from "../model/day";
import Event from "./Event";

type Props = {
    day: Day;
    closeModal: () => void;
}

export default function DayModal({day, closeModal}: Readonly<Props>) {
  return (
    <div className="z-10 min-w-[300px] max-w-[95%] rounded-lg bg-white p-4 transition-transform duration-250">
      <div className="mb-6 flex items-center justify-between gap-1 text-2xl">
        {format(day.date, 'P')}
        <button
          type="button"
          aria-label="Close"
          className="h-8 w-8 cursor-pointer rounded-full border-0 bg-transparent p-0 text-center align-middle text-[1.75rem] text-[#333] transition-colors duration-250 hover:bg-[#eaeaea]"
          onClick={closeModal}
        >
          &times;
        </button>
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