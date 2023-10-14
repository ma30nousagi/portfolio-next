export function Header() {
    return (
        <header className="relative text-green-300 border">
            <div className="container max-w-7xl flex mx-auto flex-col md:flex-row items-center p-5">
                <div className="mb-4 md:mb-0">
                    <a href="/" className="text-2xl font-bold">
                        Portfolio
                    </a>
                </div>
                <nav className="md:ml-auto text-base">
                    <ul className="flex">
                        <li><a href="/#about" className="font-bold hover:border-b hver:border-gray-900">About</a></li>
                        <li><a href="/#service" className="font-bold hover:border-b hver:border-gray-900 ml-4">Service</a></li>
                        <li><a href="/#works" className="font-bold hover:border-b hver:border-gray-900 ml-4">Works</a></li>
                        <li><a href="/#skills" className="font-bold hover:border-b hver:border-gray-900 ml-4">Skills</a></li>
                        <li><a href="/#history" className="font-bold hover:border-b hver:border-gray-900 ml-4">History</a></li>
                        <li><a href="/" className="font-bold hover:border-b hver:border-gray-900 ml-4">Contact</a></li>
                    </ul>
                </nav>
            </div>
            
        </header>
    );
}