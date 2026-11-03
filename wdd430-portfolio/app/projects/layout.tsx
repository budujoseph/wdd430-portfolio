import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <nav className='flex gap-2 mb-4 mt-4 text-sm text-gray-500 dark:text-gray-400 font-semibold tracking-wide uppercase text-center'>
                <Link href='/projects'>Overview</Link> | {' '}
                <Link href='/projects/opensource'>Open Source</Link> | {' '}
                <Link href='/projects/school'>School</Link>
            </nav>
            {children}
        </section>
    )
}