import Image from 'next/image';

export function Works() {
    return (
        <section id="works" className="container mb-20">
            <h2 className="text-2xl font-bold mb-10 text-center titleUnderbar roboto">Works</h2>
            <div className="">
              <ul className="md:grid md:grid-cols-3 md:gap-6">
                <li className="mb-6 md:mb-0 shadow">
                  <Image src="/img/bright-img.jpg" alt="Works" width={1450} height={1450} />
                </li>
                <li className="mb-6 md:mb-0 shadow">
                  <Image src="/img/terauchi-img.jpg" alt="Works" width={1450} height={1450} />
                </li>
                <li className="mb-6 md:mb-0 shadow">
                  <Image src="/img/sakuraarts-img.jpg" alt="Works" width={1450} height={1450} />
                </li>
                <li className="mb-6 md:mb-0 shadow">
                  <Image src="/img/sample-store.png" alt="Works" width={1450} height={1450} />
                </li>
                <li className="mb-6 md:mb-0 shadow">
                  <Image src="/img/abedental-img.jpeg" alt="Works" width={1450} height={1450} />
                </li>
                <li className="mb-6 md:mb-0 shadow">
                  <Image src="/img/aobadenki-image.jpeg" alt="Works" width={1450} height={1450} />
                </li>
                <li className="mb-6 md:mb-0 shadow">
                  <Image src="/img/lightbalance-img.jpeg" alt="Works" width={1450} height={1450} />
                </li>
                <li className="mb-6 md:mb-0 shadow">
                  <Image src="/img/kyoto-g.jpg" alt="Works" width={1450} height={1450} />
                </li>
                <li className="shadow">
                  <Image src="/img/a-tokyo.jpg" alt="Works" width={1450} height={1450} />
                </li>
              </ul>
            </div>
        </section>
    );
}