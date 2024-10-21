// src/components/ContactUs.js
"use client"
import React from "react";
import {motion} from "framer-motion"
import CallIcon from "../svgfiles/CallIcon";
import MailIcon from "../svgfiles/MailIcon";
import WhatsAppIcon from "../svgfiles/WhatsAppIcon";
const ContactUs = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md w-4/5 mx-auto">
      <h2 className="text-3xl  font-bold mb-4 text-black">Contact Us</h2>
      <p className="mb-4 text-black font-bold">
        Resolve your Education and Immigration Queries with our experts
      </p>
      <p className="mb-4" style={{ color: '#025B95' }}>
        Reach to us to enquire about various services offered at AdmitSpot
      </p>
      <div className="flex flex-wrap gap-6 justify-center">
        {/* Phone Contact Card */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg w-64"
        >
          <CallIcon/>
          <h3 className="text-lg font-semibold mb-1">Call</h3>
          <p className="text-gray-600">+1 999-999-9999</p>
        </motion.div>

        {/* Email Contact Card */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg w-64"
        >
          <MailIcon/>
          <h3 className="text-lg font-semibold mb-1">E-mail</h3>
          <p className="text-gray-600">info@example.com</p>
        </motion.div>
        {/* WhatsApp Contact Card */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg w-64"
        >
          <WhatsAppIcon/>
          <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
          <p className="text-gray-600">+1 999-999-9999</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;