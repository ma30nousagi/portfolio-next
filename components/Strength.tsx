export function Strength() {
    return (
        <section id="strength" className="container">
            <h2 className="text-2xl font-bold mb-10 text-center titleUnderbar">Strength<span className="block text-xs">強み</span></h2>
            <div className="">
              <ul className="">
                <li className="flex items-center md:mb-0 mb-10">
                  <div className="basis-1/6 w-4">
                    <h3 className="text-lg font-bold">達成欲</h3>
                  </div>
                  <div className="basis-5/6 pl-4 border-l-2 border-green-400">                
                    <p className="text-sm leading-relaxed">プログラミング学習当初から「わからないことをわからないままにしない」ということを肝に銘じてきました。調べながら試してを繰り返して行うことでできることを日々増やしています。</p>
                  </div>
                </li>
              </ul>
            </div>
        </section>
    );
}