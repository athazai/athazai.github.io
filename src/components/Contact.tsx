import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Tambahkan console.log untuk debugging
    console.log('Sending email...');
    console.log('Form data:', form.current);

    emailjs.init("HDYjgo22lNoXiwUK3"); // Inisialisasi EmailJS

    emailjs.sendForm(
      'service_azlnlem',
      'template_1ew76nm',
      form.current,
      'HDYjgo22lNoXiwUK3'
    )
    .then((result) => {
      console.log('Success:', result.text);
      alert('Email terkirim!');
      form.current.reset();
    }, (error) => {
      console.log('Error:', error.text);
      alert('Error mengirim email: ' + error.text);
    });
  };

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-light mb-8">Let's create together</h2>
            <p className="text-gray-600">
              Always interested in new projects and collaborations.
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div className="relative group">
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                required
                className="w-full bg-transparent border-b border-black/20 py-4 outline-none transition-colors duration-300 focus:border-black"
              />
              <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300" />
            </div>
            <div className="relative group">
              <input
                type="email"
                name="from_email"
                placeholder="Email"
                required
                className="w-full bg-transparent border-b border-black/20 py-4 outline-none transition-colors duration-300 focus:border-black"
              />
              <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300" />
            </div>
            <div className="relative group">
              <textarea
                name="message"
                placeholder="Message"
                required
                rows={4}
                className="w-full bg-transparent border-b border-black/20 py-4 outline-none transition-colors duration-300 focus:border-black resize-none"
              />
              <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-300" />
            </div>
            <button 
              type="submit"
              className="group relative px-8 py-4 bg-black text-white overflow-hidden"
            >
              <span className="relative z-10">Send Message</span>
              <span className="absolute inset-0 bg-white transform translate-y-full transition-transform duration-300" />
              <span className="absolute inset-0 bg-black transform translate-y-full transition-transform duration-300" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}