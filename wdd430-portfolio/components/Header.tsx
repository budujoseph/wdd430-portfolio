
import NavLinks from './NavLinks';
export default function Header() {
    return (
        <header className='flex gap-6 bg-blue-600 text-white py-4 shadow-md'>
            <div className='max-w-6xl mx-auto px-4 flex flex-col gap-4 sm:justify-between sm:items-center'>
                <div id="header-title" className=' ml-2 text-xl font-bold text-center sm:text-left'>Joseph Budu Larbi</div>
                <NavLinks />
            </div>
        </header>
    );
}