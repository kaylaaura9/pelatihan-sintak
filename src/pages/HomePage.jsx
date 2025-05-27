import React from 'react'
import NavBar from './NavBar'
import { IoIosArrowDroprightCircle } from "react-icons/io";

function HomePage() {
  return (
    <>
        <NavBar/>
        <HeroSection/>
        <Section2/>
        
    </>
  )
}

export default HomePage

function HeroSection (){
    return (
    <>
    <div
  className="hero h-[520px]"
  style={{
    backgroundImage:
      "url(src/assets/kopi6.jpg)",
  }}
>
  <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-7xl font-mono font-bold text-amber-100">KopiKopi</h1>
            <p className="mb-5 text-2xl font-semibold">
              Short, strong, and straight to the point. Just like the life lessons I brew every morning.
            </p>
            <button className="btn bg-amber-100 border-amber-100 text-amber-900 shadow-none font-mono">
              Our Coffee Catalog <IoIosArrowDroprightCircle />
            </button>
          </div>
        </div>
    </div>
    </>

    )
}

function Section2 (){
    return (
        <>
        <div className="hero bg-[#fefbea] min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="src/assets/WhatsApp Image 2025-05-22 at 10.14.30.jpeg"
            className="w-80 rounded-lg shadow-2xl"
          />
          <div>
      <h1 className="text-5xl font-bold text-amber-900">Your Daily Dose of Energy Starts Here.</h1>
      <p className="py-6">
        It boosts energy, improves focus, and lifts your mood. Rich in antioxidants, it supports your health and may lower disease risks. Whether you're working hard or relaxing, coffee is your perfect daily companion—warm, comforting, and delicious.
      </p>
      <button className="btn btn-primary bg-amber-900 text-amber-50 border-amber-900 shadow-2xl ml-96">Learn about us</button>
    </div>
  </div>
</div>
        </>
    )
}

