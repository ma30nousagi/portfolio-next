import Link from 'next/link';

export function Footer() {
    return (
        <footer className="w-full bg-green-700 text-white text-center">
            <div className="container max-w-7xl md:flex md:justify-start md:items-center justify-center mx-auto p-5">
                <ul className="container flex md:justify-start justify-center mx-auto md:p-0 pb-5 md:text-base text-sm">
                    <li className=""><Link href="/#service">Service</Link></li>
                    <li className="ml-4"><Link href="/#works">Works</Link></li>
                    <li className="ml-4"><Link href="/#skills">Skills</Link></li>
                    <li className="ml-4"><Link href="/#history">History</Link></li>
                    <li className="ml-4"><Link href="https://socketweb.net/contact/">Contact</Link></li>
                </ul>
                <small className="p-5 md:basis-1/5">&copy;2026 my portfolio</small>
            </div>    
        </footer>
    );
}