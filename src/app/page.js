'use client';
import React from 'react';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import VirtualOffice from './components/VirtualOffice';
import RequestCallback from './components/RequestCallback';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main >
        <Navbar />
      {/* Contact Us*/}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <ContactUs />
      </motion.div>

      {/* Virtual Office */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <VirtualOffice />
      </motion.div>

      {/* Request Callback */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <RequestCallback />
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Footer />
      </motion.div>
    </main>
  );
}
