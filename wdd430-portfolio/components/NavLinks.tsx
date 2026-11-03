'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavLinks() {
    const pathname = usePathname();

    return (
            <nav aria-label="Primary">
                <ul className='max-w-4xl mx-auto px-4 flex gap-8 justify-between items-center'>
                    <li><Link href="/"
                    className={pathname === '/' ? 'active' : 'hover:text-black'}>
                        Home
                    </Link></li>
                    <li><Link href="/about" className={pathname === '/about' ? 'active' : 'hover:text-black'}>
                        About
                    </Link></li>
                    <li><Link href="/projects" className={pathname === '/projects' ? 'active' : 'hover:text-black'}>
                        Projects
                    </Link></li>
                    <li><Link href="/contact" className={pathname === '/contact' ? 'active' : 'hover:text-black'}>
                        Contact
                    </Link></li>
                </ul>
            </nav>
    )
        
}