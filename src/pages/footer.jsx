import React from "react";
import { GiCoffeePot } from "react-icons/gi";

function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <div className="flex justify-center items-center gap-2 ">
            <GiCoffeePot className="text-2xl"/>{" "}
            <h1 className="text-xl text-amber-900 font-bold">KopiKopi</h1>
          </div>
          <p className="text-md font-semibold w-96" >
            Whether you're working hard or relaxing, coffee is your perfect daily companion—warm, 
            comforting, and delicious.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-amber-800 font-bold">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Coffee Products</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title text-amber-800 font-bold">Coffee Products</h6>
          <a className="link link-hover">Arabica Varieties</a>
          <a className="link link-hover">Liberica Varieties</a>
          <a className="link link-hover">Robusta Varieties</a>
          <a className="link link-hover">Non cafein</a>
        </nav>
        <nav className="w-96">
          <h6 className="footer-title text-amber-800 font-bold">Contact Us</h6>
          <p>Jl. Sriwijaya No. 123, Palembang, South Sumatra, Indonesia 30139</p>
          <p>info@aromasriwijaya.com</p>
          <p>+62 812 3456 7890</p>
          
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} KopiKopi. All rights reserved.
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
