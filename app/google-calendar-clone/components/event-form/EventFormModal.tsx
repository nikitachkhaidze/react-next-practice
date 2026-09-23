import { format } from "date-fns";
import GCCheckboxInput from "./GCCheckboxInput";
import GCEventColorRadioGroup from "./GCEventColorRadioGroup";
import GCTextInput from "./GCTextInput";
import GCTimeInput from "./GCTimeInput";
import CloseButton from "../ui/CloseButton";
import ActionButton from "../ui/ActionButton";

type Props = {
  date: Date;
  closeModal: () => void;
}

export default function EventFormModal({date, closeModal}: Readonly<Props>) {
  return <>
      <div className="z-10 w-auto min-w-[300px] max-w-[95%] scale-100 rounded-lg bg-white p-4">
        <div className="mb-6 flex items-center justify-between gap-1 text-2xl">
          <div>Add Event</div>
          <small className="text-[#555]">{format(date, 'P')}</small>
          <CloseButton onClick={closeModal}></CloseButton>
        </div>
        <form>
          <GCTextInput name='name' id="name" label="Name"></GCTextInput>
          <GCCheckboxInput type="checkbox" name='isAllDay' id="isAllDay" label="All Day"></GCCheckboxInput>
          <div className="flex gap-2 mb-4">
            <GCTimeInput name='start-time' label='Start Time'></GCTimeInput>
            <GCTimeInput name='end-time' label='End Time'></GCTimeInput>
          </div>
          <div className="mb-4 flex flex-col">
            <span className='text-[0.8rem] font-bold text-[#777]'>Color</span>

            <GCEventColorRadioGroup></GCEventColorRadioGroup>
          </div>
          <div className="flex gap-2">
            <ActionButton color="green" label="Add" onClick={closeModal}></ActionButton>
            <ActionButton color="red" label="Delete" onClick={closeModal}></ActionButton>
          </div>
        </form>
      </div>
  </>;
}