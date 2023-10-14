export function Service() {
    return (
        <section id="service" className="container mb-20">
            <h2 className="text-2xl font-bold mb-10 text-center titleUnderbar">Service</h2>
            <div className="">
              <ul className="md:grid md:grid-cols-3 md:gap-6">
                <li className="md:mb-0 mb-10">
                  <h3 className="text-lg font-bold mb-4 text-center">ディレクション<span className="block text-xs">Direction</span></h3>
                  <img src="./img/11.png" alt="人物" className="mb-4 w-1/5 mx-auto"></img>
                  <p className="text-sm leading-relaxed">クライアントのご要望をお伺いし、サービスをより魅力的に見せストアに訪れたユーザーの購買意欲を高めることができるかを考え、ストア構成に落とし込みます。商品の見た目やデザインも大切ですが購入目線でストレスのないシームレスな導線設計を重要視しています。</p>
                </li>
                <li className="md:mb-0 mb-10">
                  <h3 className="text-lg font-bold mb-4 text-center">ECサイト制作<span className="block text-xs">Coding</span></h3>
                  <img src="./img/13.png" alt="人物" className="mb-4 w-1/5 mx-auto"></img>
                  <p className="text-sm leading-relaxed">ユーザビリティの高いストアを作成するため、カートシステムはShopifyを使用します。Shopifyでの実装を得意としておりそのシステムの特徴を活かして、コーディングやアプリなどでカスタマイズすることでユーザーの顧客体験を最適化していきます。</p>
                </li>
                <li className="">
                  <h3 className="text-lg font-bold mb-4 text-center">保守<span className="block text-xs">Maintenance</span></h3>
                  <img src="./img/12.png" alt="人物" className="mb-4 w-1/5 mx-auto"></img>
                  <p className="text-sm leading-relaxed">Webサイト・ECストアともに公開して終わりではありません。常にどこを改善すれば良いのかを意識してお客様にご提案させていただきながら、お客様と一緒にサイトの成長のお手伝いをさせていただいております。</p>
                </li>
              </ul>
            </div>
        </section>
    );
}