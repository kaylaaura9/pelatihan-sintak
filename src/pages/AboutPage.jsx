import React from 'react'
import NavBar from './NavBar'
import Footer from './footer'
import { PiCoffeeDuotone } from "react-icons/pi";
import { FiCoffee } from "react-icons/fi";
import { LuLeaf } from "react-icons/lu";



function AboutPage() {
  return (
    <div>
        <NavBar/>
        <HeroSection/>
        <Section2/>
        <Footer/>
    </div>

  )
}

export default AboutPage

function HeroSection (){
    return (
      <>
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="src\assets\WhatsApp Image 2025-05-22 at 21.47.25 (1).jpeg"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <p className="bg-amber-100 text-amber-800 w-max p-1 rounded-lg text-sm font-medium mr-20">
              Direct from Indonesia
            </p>
      <h1 className="text-7xl font-bold text-orange-300">COFFE PRODUCT</h1>
      <p className="py-6">
        Temukan kenikmatan sejati dalam setiap tegukan kopi terbaik dari alam nusantara.
      </p>
      
      <button className="btn btn-primary  bg-amber-900 text-amber-50 border-amber-900 shadow-2xl ml-72font-mono">OUR COFFE PRODUCT</button>
    </div>
    
  </div>
</div>
      </>
        
    );
}

function Section2() {
  return (
    <>
      <div className="hero bg-white min-h-screen ">
        <div className="hero-content flex-col">
          <div className="text-center flex justify-center items-center flex-col w-2xl">
            <p className="bg-amber-100 text-amber-800 w-max p-1.5 rounded-lg text-sm font-medium text-center">
              Why Choose Us
            </p>
            <h1 className="font-bold text-4xl">Our Commitment to Excellence</h1>
            <h1 className="text-xl">
              Discover why coffee businesses around the world trust Aroma
              Sriwijaya for their premium Indonesian coffee needs.
            </h1>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="w-72 h-56 bg-white rounded-lg m-4 p-4 ml-2 border-amber-100 border-2 flex flex-col gap-2">
              <PiCoffeeDuotone />  
              <h1 className="font-semibold text-xl">Global Reach</h1>
              <h1>
                We export to roasteries and wholesalers worldwide, with
                efficient logistics and reliable delivery.
              </h1>
            </div>
            <div className="w-72 h-56 bg-white rounded-lg m-4 p-4 border-amber-100 border-2 flex flex-col gap-2">
              <FiCoffee className="text-5xl text-amber-800" />
              <h1 className="font-semibold text-xl">Global Reach</h1>
              <h1>
                We export to roasteries and wholesalers worldwide, with
                efficient logistics and reliable delivery.
              </h1>
            </div>
            <div className="w-72 h-56 bg-white rounded-lg m-4 p-4 border-amber-100 border-2 flex flex-col gap-2">
              <LuLeaf className="text-5xl text-amber-800" />
              <h1 className="font-semibold text-xl">Global Reach</h1>
              <h1>
                We export to roasteries and wholesalers worldwide, with
                efficient logistics and reliable delivery.
              </h1>
            </div>
            <div className="w-72 h-56 bg-white rounded-lg m-4 p-4 mr-2 border-amber-100 border-2 flex flex-col gap-2">
              <LuLeaf className="text-5xl text-amber-800" />
              <h1 className="font-semibold text-xl">Global Reach</h1>
              <h1>
                We export to roasteries and wholesalers worldwide, with
                efficient logistics and reliable delivery.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}