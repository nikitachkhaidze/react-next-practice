'use client';

import ActionButton from "../ui/ActionButton";
import GCCheckboxInput from "./GCCheckboxInput";
import GCEventColorRadioGroup from "./GCEventColorRadioGroup";
import GCTextInput from "./GCTextInput";
import GCTimeInput from "./GCTimeInput";
import { SubmitHandler, useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import { EventFormSchema, eventFormSchema } from "../../schemas/eventFormSchema";
import GCErrorMessage from "./GCErrorMessage";

type Props = {
  closeModal: () => void;
}

export default function EventForm({closeModal}: Readonly<Props>) {
    const {
      control,
      register,
      handleSubmit,
      watch,
      formState: {errors, isSubmitting}, 
    } = useForm<EventFormSchema>({
      resolver: zodResolver(eventFormSchema),
      defaultValues: { isAllDay: false, color: 'blue' },
      mode: 'onBlur',
    });

    const isAllDay = watch('isAllDay');

    const onSubmit: SubmitHandler<EventFormSchema> = async (data) => {
      console.log(data, errors, control);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      closeModal();
    };

    const fields = ['name', 'isAllDay', 'startTime', 'endTime', 'color'] as const;

    return <form onSubmit={handleSubmit(onSubmit)}>
      <GCTextInput className="mb-2" label="Name" {...register('name')} control={control}></GCTextInput>
      <GCCheckboxInput className="mb-2" type="checkbox" label="All Day" {...register('isAllDay')}></GCCheckboxInput>
      <div className="flex gap-2 mb-4">
        <GCTimeInput label='Start Time' disabled={isAllDay} {...register('startTime')}></GCTimeInput>
        <GCTimeInput label='End Time' disabled={isAllDay} {...register('endTime')}></GCTimeInput>
      </div>
      <div className="mb-4 flex flex-col">
        <span className='text-[0.8rem] font-bold text-[#777]'>Color</span>

        <GCEventColorRadioGroup {...register('color')}></GCEventColorRadioGroup>
      </div>
      <div className="flex gap-2">
        <ActionButton color="green" label="Add" disabled={isSubmitting} type="submit"></ActionButton>
        <ActionButton color="red" label="Delete" onClick={closeModal} disabled={isSubmitting}></ActionButton>
      </div>
      {fields.map(field => <GCErrorMessage key={field} name={field} control={control}></GCErrorMessage>)}
    </form> 
}