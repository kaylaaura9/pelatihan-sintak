import NavBar from './NavBar'
import Footer from './footer'

import React, { useState } from 'react';
import { db } from '../FireBase';
import { collection, addDoc } from 'firebase/firestore';

function ContactPage() {
  return (
    <div>
        <NavBar/>
        <footer/>
        <ContactSection/>
    </div>
  )
}

export default ContactPage

function ContactSection(){

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    product: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simpan data ke Firestore
      await addDoc(collection(db, 'contacts'), formData);
      alert('Pesan berhasil dikirim!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Error submitting form: ', error);
      alert('Terjadi kesalahan. Silakan coba lagi.');
    }
  };

  return(
    <>
    <div className="w-96 max-w-md mx-32 p-5 bg-white rounded-lg shadow-md mt-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">CONTACT US</h2>


      <form onSubmit={handleSubmit }>
        <div className="space-y-4"> 
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            name
          </label>
          <input
            type="text"
            name='name'
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
            required
            value={formData.name}
              onChange={handleChange}
           
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            email
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Email"
            required
            value={formData.email}
              onChange={handleChange}        
          />
        </div>

        <div>
          <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-1">
            Product of Interest
          </label>
          <select
            name="product"
            defaultValue=""
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
            required
            value={formData.name}
              onChange={handleChange}
          >
          
            <option value="" disabled>
              Product
            </option>
            <option value="product1">Produk 1</option>
            <option value="product2">Produk 2</option>
            <option value="product3">Produk 3</option>
            <option value="product4">Produk 4</option>
            <option value="other">Lainnya</option>
          </select>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            message
          </label>
          <textarea
            type="text"
            name='message'
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Message"
            required
            value={formData.message}
              onChange={handleChange}

          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-amber-800 hover:bg-amber-900 text-white font-medium py-2 px-4 rounded-md transition duration-300"
        >
          Send message
        </button>
      </form>
    </div>
    </>
  )
}