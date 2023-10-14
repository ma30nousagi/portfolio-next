import Image from 'next/image';

export function Visual() {
    return (
        <section id="about" className="container flex flex-col-reverse md:flex-row items-center justify-between mb-20">            
            <div className="basis-4/6 mb-12 md:mb-0 text-center md:text-left">
              <h1 className="text-2xl font-bold text-gray-500 mb-8"><span className="text-lg">はじめまして。</span><br />エンジニアのMunetoです</h1>
              <h2 className="text-2xl font-bold mb-4 roboto">About</h2>
              <p className="text-base mb-8 leading-relaxed">ものづくりを通して人と人をつなげる新しい環をつくるお手伝いをしています</p>
              <button className=" bg-green-500 border-0 rounded-sm py-2.5 px-4 text-white hover:bg-green-600"><a href="https://socketweb.net/contact/">お問い合わせ</a></button>
            </div>
            <div className="basis-1/3 max-w-sm md:max-w-3xl md:ml-4 md:mb-0 mb-4">
              <Image src="/img/portfolio-img.jpg" alt="Visual" width={1120} height={1680} />
            </div>
        </section>
    );
}