import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Visual } from "../../components/mainVisual";
import { Service } from "../../components/Service";
import { Works } from "../../components/Works";
import { Skills } from "../../components/Skills";
import { Strength } from "../../components/Strength";
import { History } from "../../components/History";

// const inter = Inter({ subsets: ['latin'] })

const TopPage = () => {
  return (
    <>
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
