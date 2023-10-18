import Head from "next/head"
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Visual } from "../../components/mainVisual";
import { Service } from "../../components/Service";
import { Works } from "../../components/Works";
import { Skills } from "../../components/Skills";
import { History } from "../../components/History";


const TopPage = () => {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Next.jsで作成したポートフォリオです。" />
      </Head>
      <Header />
      <main className="py-10 max-w-7xl mx-auto">
        <div className="container p-5 mx-auto">
          <Visual />
          <Service />
          <Works />
          <Skills />
          <History />                    
        </div>
      </main>
      <Footer /> 
    </>
  )
};

export default TopPage;
