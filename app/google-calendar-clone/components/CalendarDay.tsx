import Event from './events/Event';
import { Day } from '../model/day';
import { format } from 'date-fns';
import { useModal } from '@/providers/ModalContext';
import DayModal from './DayModal';
import EventFormModal from './event-form/EventFormModal';
import IconButton from './ui/IconButton';

export default function CalendarDay({date, events}: Readonly<Day>) {
    const hasMoreEvents = true;
    const {open, close} = useModal()

    function openEventModal() {
        close();

        open(
            <EventFormModal date={date} closeModal={close}></EventFormModal>, 
            {focusTrapOptions: {initialFocus: '#name-input'},
        });
    }

    function openDayModal() {
        close();
        const day: Day = {date, events};

        open(<DayModal day={day} closeModal={close}></DayModal>);
    }

    return  <div className="group flex flex-col overflow-hidden bg-(--gc-surface-color) p-(--gc-day-padding) opacity-75">
        <div className="relative mb-1 flex flex-col items-center opacity-50">
            <div className="text-xs font-bold uppercase text-(--gc-muted-text-color)">{format(date, 'iii')}</div>
            <div className="flex h-6 w-6 items-center justify-center text-[0.9rem]">{format(date, 'd')}</div>
            <IconButton size='s' className='absolute right-0 top-0' onClick={openEventModal}>+</IconButton>
        </div>
        <div className="flex grow flex-col gap-2 overflow-hidden opacity-50">
            {events.map((event, index) => <Event key={index} event={event}></Event>)}
        </div>
        {hasMoreEvents && <div className='text-xs m-0 ml-auto mr-auto cursor-pointer' onClick={openDayModal}>+ 3 more</div>}
    </div>
}