'use client';

import ActionButton from "../ui/ActionButton";
import GCCheckboxInput from "./GCCheckboxInput";
import GCEventColorRadioGroup from "./GCEventColorRadioGroup";
import GCTextInput from "./GCTextInput";
import GCTimeInput from "./GCTimeInput";
import { SubmitHandler, useForm } from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import { EventFormSchema, eventFormSchema } from "../../schemas/eventFormSchema";

type Props = {
  closeModal: () => void;
}

export default function EventForm({closeModal}: Readonly<Props>) {
    const {
      control,
      register,
      handleSubmit,
      watch,
      formState: {errors, isSubmitting, isValid}, 
      reset,
    } = useForm<EventFormSchema>({
      resolver: zodResolver(eventFormSchema),
      defaultValues: { isAllDay: false, color: 'blue' },
    });

    const onSubmit: SubmitHandler<EventFormSchema> = async (data) => {
      console.log(data, errors, control);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      closeModal();
    };

    return <form onSubmit={handleSubmit(onSubmit)}>
      <GCTextInput className="mb-2" label="Name" {...register('name')} error={errors.name}></GCTextInput>
      <GCCheckboxInput className="mb-2" type="checkbox" label="All Day" {...register('isAllDay')}></GCCheckboxInput>
      <div className="flex gap-2 mb-4">
        <GCTimeInput label='Start Time' {...register('startTime')}></GCTimeInput>
        <GCTimeInput label='End Time' {...register('endTime')}></GCTimeInput>
      </div>
      <div className="mb-4 flex flex-col">
        <span className='text-[0.8rem] font-bold text-[#777]'>Color</span>

        <GCEventColorRadioGroup {...register('color')}></GCEventColorRadioGroup>
      </div>
      <div className="flex gap-2">
        <ActionButton color="green" label="Add" disabled={isSubmitting} type="submit"></ActionButton>
        <ActionButton color="red" label="Delete" onClick={closeModal} disabled={isSubmitting}></ActionButton>
      </div>
    </form>
}