export function Works() {
    return (
        <section id="works" className="container mb-20">
            <h2 className="text-2xl font-bold mb-10 text-center titleUnderbar">Works</h2>
            <div className="">
              <ul className="md:grid md:grid-cols-3 md:gap-6">
                <li className="mb-6 md:mb-0 shadow"><img src="./img/sample-store.png" alt="works" className=""></img></li>
                <li className="mb-6 md:mb-0 shadow"><img src="./img/abedental-img.jpeg" alt="works" className=""></img></li>
                <li className="mb-6 md:mb-0 shadow"><img src="./img/aobadenki-image.jpeg" alt="works" className=""></img></li>
                <li className="mb-6 md:mb-0 shadow"><img src="./img/lightbalance-img.jpeg" alt="works" className=""></img></li>
                <li className="mb-6 md:mb-0 shadow"><img src="./img/kyoto-g.jpg" alt="works" className=""></img></li>
                <li className="shadow"><img src="./img/a-tokyo.jpg" alt="works" className=""></img></li>
              </ul>
            </div>
        </section>
    );
}