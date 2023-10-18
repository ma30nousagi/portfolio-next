import Link from 'next/link';

export function Header() {
    return (
        <header className="w-full fixed text-green-300 bg-gray-50 shadow-sm z-10">
            <div className="container max-w-7xl flex mx-auto flex-col md:flex-row items-center p-5">
                <div className="mb-4 md:mb-0">
                    <Link href="/" className="text-2xl font-bold">Portfolio</Link>    
                </div>
                <nav className="md:ml-auto md:text-base text-sm">
                    <ul className="flex">
                        <li><Link href="#service" className="font-bold hover:border-b hver:border-gray-900 ml-4">Service</Link></li>
                        <li><Link href="#works" className="font-bold hover:border-b hver:border-gray-900 ml-4">Works</Link></li>
                        <li><Link href="#skills" className="font-bold hover:border-b hver:border-gray-900 ml-4">Skills</Link></li>
                        <li><Link href="#history" className="font-bold hover:border-b hver:border-gray-900 ml-4">History</Link></li>
                        <li><Link href="https://socketweb.net/contact/" className="font-bold hover:border-b hver:border-gray-900 ml-4">Contact</Link></li>
                    </ul>
                </nav>
            </div>            
        </header>
    );
}