import React from 'react'
import NavBar from './NavBar'
import Footer from './footer'

function ProductPage() {
  return (
    <div>
        <NavBar/>
        <HeroSection/>
        <Section2 />
        <Footer/>
    
    </div>
  )
}

export default ProductPage

function  HeroSection(){
  return(
    <>
    <div className="hero bg-[#fefbea] min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="public\WhatsApp Image 2025-05-20 at 20.15.46.jpeg"
            className="w-2` rounded-2xl shadow-2xl"
          />
          <div>
      <h1 className="text-5xl font-bold text-amber-900">Your  Dose of Energy Starts Here.</h1>
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


function Section2() {
  return (
    <>
      <div className="flex items-center justify-center my-10 gap-4">
        {/* Card */}
        <ProductCard
          image="src\assets\WhatsApp Image 2025-05-27 at 09.24.28 (2).jpeg"
          title="Sumatra Mandheling"
          from="Aceh, North Sumatra"
          processing="Wet-Hulledd"
          Altitude="1,200-1,500 masl"
          flavor="Earthy, Herbal, Spicy"
          available="Year-round"
        />

        <ProductCard
          image="src\assets\WhatsApp Image 2025-05-22 at 21.47.25 (1).jpeg"
          title="Java Preanger"
          from="West Java"
          processing="Washed"
          Altitude="1,300-1,600 masl"
          flavor="Citrus, Floral, Clean"
          available="June - December"
        />

        <ProductCard
          image="src\assets\WhatsApp Image 2025-05-22 at 21.47.25 (1).jpeg"
          title="Bali Kintamani"
          from="Bali"
          processing="Wet Process"
          Altitude="1,200-1,600 masl"
          flavor="Lemon, Caramel, Nutty"
          available="May - October"
        />
      </div>

      <div className="flex items-center justify-center my-10 gap-4">
        {/* Card */}
        <ProductCard
          image="src\assets\WhatsApp Image 2025-05-22 at 21.47.25 (1).jpeg"
          title="Flores Bajawa"
          from="East Nusa Tenggara"
          processing="Semi-Washed"
          Altitude="1,300-1,800 masl"
          flavor="Chocolate, Spice, Floral"
          available="June - November"
        />

        <ProductCard
          image="src\assets\WhatsApp Image 2025-05-22 at 21.47.25 (1).jpeg"
          title="Toraja Kalosi"
          from="South Sulawesi"
          processing="Wet-Hulled"
          Altitude="1,400-1,800 masl"
          flavor="Dark Chocolate, Spicy, Earthy"
          available="Year-round"
        />

        <ProductCard
          image="src\assets\WhatsApp Image 2025-05-22 at 21.47.25 (1).jpeg"
          title="Java Robusta"
          from="East Java"
          processing="Dry Process"
          Altitude="600-900 masl"
          flavor="Woody, Nutty, Strong"
          available="Year-round"
        />
      </div>
    </>
  );
}

function ProductCard(props) {
  return (
    <>
      {/* Card */}
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src={props.image}
            alt="Shoes"
            img
            className="w-full h-64 object-cover rounded-t-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">{props.title}</h2>
          <p className=" ">{props.from}</p>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-md">Processing</span>
            <span className=" text-md">{props.processing}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-md">Altitude</span>
            <span className=" text-md">{props.Altitude}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-md">Flavor Notes</span>
            <span className=" text-md">{props.flavor}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-md">Available</span>
            <span className=" text-md">{props.available}</span>
          </div>

          <div className="card-actions justify-center">
            <button className="btn bg-amber-800 text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}