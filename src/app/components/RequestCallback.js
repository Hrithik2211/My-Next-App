"use client"
import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion';
function RequestCallback() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    country: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }
    if (!formData.phoneNumber)
      newErrors.phoneNumber = 'Phone number is required';
    if (!formData.country) newErrors.country = 'Country is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      emailjs
        .send(
          'service_ri6zkyo', 
          'template_yxb0ltp',
          formData,
          'Ln0Pl7fldTZ6F9SXU' 
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Callback request sent successfully!');
            setFormData({
              fullName: '',
              email: '',
              phoneNumber: '',
              country: '',
              message: '',
            });
          },
        )
          .catch((error) => {
            console.log('FAILED...', error);
            alert('There was an error sending the request.');
  }
)
    } else {
      setErrors(newErrors);
    }
  };

  // Update form data state
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col w-4/5 md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10">
      {/* Contact Form */}
      <div className="w-full md:w-1/2 bg-blue-200 p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name*"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number*"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
          )}

          <input
            type="text"
            name="country"
            placeholder="Country of Residence*"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          {errors.country && (
            <p className="text-red-500 text-sm">{errors.country}</p>
          )}

          <textarea
            name="message"
            placeholder="How can we serve you"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            rows="4"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded hover:bg-gray-900"
          >
            Request a callback
          </motion.button>
        </form>
      </div>

      {/* Office Cards */}
      <div className="w-full md:w-1/2 space-y-6">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-bold">Ontario Office</h3>
          <p className="mt-2 text-sm text-gray-600">Mon-Fri 9:30am - 6pm</p>
          <p className="mt-1 text-sm text-gray-600">
            Suite 1500, 4 Robert Speck Pkwy, Mississauga, Ontario, Canada, L4Z
            1S1
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm text-blue-600">+1-905-783-7708</p>
              <p className="text-sm text-blue-600">info@admitspot.com</p>
            </div>
            <div className="w-24 h-auto">
              {' '}
        
              <img
                src="https://s3-alpha-sig.figma.com/img/91e8/000b/d739eeb242a61be793dc4cc2aa42c8dd?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UVfJTRWumBRHNIITfAyT7IUB8gSOLYkZdg8B1WXcggmlCfG9LZZ5yXFGIXBI94fDR42kIl2ps4Xq9uwvieYPotVLI3cafcLPILj~Tos1ByxtXIJSw7KsG9yjdq0GIZJJjSbIdd8EhElKMo6Vrg2ESomEVz9SWqVsByQBCCS7g-znFVoDNE4YW7IMZygDNV8YKScxOwt6fVH2dCnlW3JXxIYeTbg4KIDddragQ481GAONSzjEK6Jg7pofzKc9zky68DNC6NhmRQ4~T2A~lQUJ3MtbGzD0xQ03fshoexpYCn3fD9QabldF7OhdgLeThbg9TngjcqET4C~1IjpFR~-Vxg__"
                alt="Ontario Office Map"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h3 className="text-xl font-bold">New Brunswick Office</h3>
          <p className="mt-2 text-sm text-gray-600">Mon-Fri 9:30am - 6pm</p>
          <p className="mt-1 text-sm text-gray-600">
            Suite 406, 82 Westmorland Street, Fredericton, New Brunswick,
            Canada, E3B 3L3
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-sm text-blue-600">+1-506-999-7708</p>
              <p className="text-sm text-blue-600">info@admitspot.com</p>
            </div>
            <div className="w-24 h-auto">
              {' '}
            
              <img
                src="https://s3-alpha-sig.figma.com/img/91e8/000b/d739eeb242a61be793dc4cc2aa42c8dd?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UVfJTRWumBRHNIITfAyT7IUB8gSOLYkZdg8B1WXcggmlCfG9LZZ5yXFGIXBI94fDR42kIl2ps4Xq9uwvieYPotVLI3cafcLPILj~Tos1ByxtXIJSw7KsG9yjdq0GIZJJjSbIdd8EhElKMo6Vrg2ESomEVz9SWqVsByQBCCS7g-znFVoDNE4YW7IMZygDNV8YKScxOwt6fVH2dCnlW3JXxIYeTbg4KIDddragQ481GAONSzjEK6Jg7pofzKc9zky68DNC6NhmRQ4~T2A~lQUJ3MtbGzD0xQ03fshoexpYCn3fD9QabldF7OhdgLeThbg9TngjcqET4C~1IjpFR~-Vxg__"
                alt="New Brunswick Office Map"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default RequestCallback
