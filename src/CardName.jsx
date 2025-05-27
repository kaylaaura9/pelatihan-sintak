import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { SiRoblox } from "react-icons/si";

function CardName() {
  return (
    <>
    <div 
    className="h-screen bg-gray-200 flex justify-center items-center">
    <div className="w-96 h-auto border-1 bg-white p-4 rounded-2xl">
    <div className="flex justify-center items-center flex-col">
        <img 
            src="src\assets\WhatsApp Image 2025-05-20 at 20.15.46.jpeg" alt="" 
              className="w-30 rounded-br-full shadow-xl border-1" 
              />

                <h1
                className="text-xl text-blue-900 font-bold">Kayla Aura</h1>
                <p>Mahasiswa</p>
            </div>
            
          <div className="mt-4 text-amber-900">
            <p>
              "Hai, perkenalkan nama saya Kayla Aura Hermansyah. saya biasa dipanggil kayla.
              Saya anak ke dua dari tiga bersaudara, dan saya lahir di palembang."
            </p>
          </div>
          
          <LinkSocial
            text="Link google"
            icon={<FaGoogle className="mr-2 text-amber-50" />}
            link="https://www.google.co.id/?hl=id"
          />
          <LinkSocial
            text="Link roblox"
            icon={<SiRoblox className="mr-2 text-gray-300" />}
            link="https://www.roblox.com/"
          />
    
        </div> 
        
        
    </div>
    </>
  )
}

export default CardName

function LinkSocial(props){
  return(
    <>
    <div className="mt-4 flex justify-center items-center"> 
        <a 
        className="bg-blue-900 text-amber-400 p-2 w-full rounded-lg text-center flex justify-center items-center"
        href={props.link} 
        target="_blank"
        >

          {props.icon}{props.text}
        </a>
        </div>
    </>
  );
}