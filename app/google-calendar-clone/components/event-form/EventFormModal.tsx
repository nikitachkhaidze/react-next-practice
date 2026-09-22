import GCInput from "./GCInput";

export function EventFormModal() {
  const labelClassName = "text-[0.8rem] font-bold text-[#777]";
  const inputClassName = "px-2 py-1";
  const buttonClassName =
    "cursor-pointer rounded border px-4 py-2 text-base text-[#333] transition-colors duration-250";

  return <>
      <div className="fixed size-full bg-black/50" />
      <div className="z-10 w-auto min-w-[300px] max-w-[95%] scale-100 rounded-lg bg-white p-4">
        <div className="mb-6 flex items-center justify-between gap-1 text-2xl">
          <div>Add Event</div>
          <small className="text-[#555]">6/8/23</small>
          <button
            className="size-8 cursor-pointer rounded-full border-0 bg-transparent p-0 text-center text-[1.75rem] leading-8 text-[#333] transition-colors duration-250 hover:bg-[#eaeaea]"
            type="button"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <form>
          <GCInput className="mb-4 flex flex-col" type="name" name='name' id="name" label="Name"></GCInput>
          <GCInput className="mb-4 flex flex-row items-center" type="checkbox" name='isAllDay' id="isAllDay" label="All Day"></GCInput>
          <div className="flex gap-2">
            <div className="mb-4 flex min-w-0 grow basis-0 flex-col">
              <label className={labelClassName} htmlFor="start-time">
                Start Time
              </label>
              <input className={inputClassName} type="time" name="start-time" id="start-time" />
            </div>
            <div className="mb-4 flex min-w-0 grow basis-0 flex-col">
              <label className={labelClassName} htmlFor="end-time">
                End Time
              </label>
              <input className={inputClassName} type="time" name="end-time" id="end-time" />
            </div>
          </div>
          <div className="mb-4 flex flex-col">
            <span className={labelClassName}>Color</span>
            <div className="flex gap-2">
              <input
                className="peer/blue absolute -left-[9999px] opacity-0"
                type="radio"
                name="color"
                value="blue"
                id="blue"
                defaultChecked
              />
              <label
                className="block size-7 cursor-pointer rounded bg-[hsl(200,80%,50%)] opacity-25 outline-offset-1 peer-checked/blue:opacity-100 peer-focus-visible/blue:outline peer-focus-visible/blue:outline-1 peer-focus-visible/blue:outline-black"
                htmlFor="blue"
              >
                <span className="sr-only">Blue</span>
              </label>
              <input
                className="peer/red absolute -left-[9999px] opacity-0"
                type="radio"
                name="color"
                value="red"
                id="red"
              />
              <label
                className="block size-7 cursor-pointer rounded bg-[hsl(0,75%,60%)] opacity-25 outline-offset-1 peer-checked/red:opacity-100 peer-focus-visible/red:outline peer-focus-visible/red:outline-1 peer-focus-visible/red:outline-black"
                htmlFor="red"
              >
                <span className="sr-only">Red</span>
              </label>
              <input
                className="peer/green absolute -left-[9999px] opacity-0"
                type="radio"
                name="color"
                value="green"
                id="green"
              />
              <label
                className="block size-7 cursor-pointer rounded bg-[hsl(150,80%,30%)] opacity-25 outline-offset-1 peer-checked/green:opacity-100 peer-focus-visible/green:outline peer-focus-visible/green:outline-1 peer-focus-visible/green:outline-black"
                htmlFor="green"
              >
                <span className="sr-only">Green</span>
              </label>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              className={`${buttonClassName} grow basis-0 border-[hsl(150,80%,30%)] bg-[hsl(150,80%,95%)] text-[hsl(150,80%,10%)] hover:bg-[hsl(150,80%,90%)]`}
              type="submit"
            >
              Add
            </button>
            <button
              className={`${buttonClassName} grow basis-0 border-[hsl(0,75%,60%)] bg-[hsl(0,75%,95%)] text-[hsl(0,75%,10%)] hover:bg-[hsl(0,75%,90%)]`}
              type="button"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
  </>;
}