export function Footer() {
    return (
        <footer className="bg-green-700 text-white text-center">
            <div className="container max-w-7xl md:flex md:justify-start md:items-center justify-center mx-auto p-5">
                <ul className="container flex md:justify-start justify-center mx-auto md:p-0 pb-5">
                    <li className=""><a href="/">Home</a></li>
                    <li className="ml-4"><a href="/#about">About</a></li>
                    <li className="ml-4"><a href="/#service">Service</a></li>
                    <li className="ml-4"><a href="/#works">Works</a></li>
                    <li className="ml-4"><a href="/#skills">Skills</a></li>
                    <li className="ml-4"><a href="/#history">History</a></li>
                    <li className="ml-4"><a href="https://socketweb.net/contact/">Contact</a></li>
                </ul>
                <small className="p-5">&copy;2023</small>
            </div>    
        </footer>
    );
}