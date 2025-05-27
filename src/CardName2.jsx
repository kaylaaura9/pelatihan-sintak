import React from 'react'

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
              "Hai, perkenalkan nama saya Kayla Aura Hermansyah. Teman teman saya biasa memanggil kayla.
              Saya anak ke dua dari tiga bersaudara, dan saya lahir di palembang."
            </p>
          </div>

        <div className="mt-4 flex justify-center items-center"> 
        <a 
        className="bg-blue-900 text-amber-400 p-2 w-full rounded-lg text-center"
        href="https://www.google.co.id/?hl=id" 
        target="_blank"
        >
          link google
        </a>
        </div>

        </div >
        
        
        
    </div>
    </>
  )
}

export default CardName