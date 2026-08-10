'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {href: string, children: React.ReactNode};

export default function NavLink({href, children}: Readonly<Props>) {
    const pathName = usePathname();

    return <Link href={href} className={`font-bold text-lg ${pathName !== href ? 'text-gray-800' : 'text-gray-500'}`}>
            {children}
        </Link>;
}