
import NavLinks from './NavLinks';
export default function Header() {
    return (
        <header className='flex gap-6 bg-blue-600 text-white py-4 shadow-md'>
            <div id="header-title" className=' ml-2 text-2xl font-bold'>Joseph Budu Larbi</div>
            <div className='max-w-4xl mx-auto px-4 flex justify-between items-center'>
                <NavLinks />
            </div>
        </header>
    );
}