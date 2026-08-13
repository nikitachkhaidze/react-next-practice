import NavLink from '@/components/ui/NavLink';

export default function Home() {
  return (
    <>
      <h1 className="mb-2">Choose a task:</h1>

      <ol>
        <li>
          <NavLink href={'/modal'}>Modal</NavLink>
        </li>
         <li>
          <NavLink href={'/date-picker'}>Date Picker</NavLink>
        </li>
      </ol>
    </>
  );
}
