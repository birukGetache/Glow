import React, { useState } from 'react';
import NavBar from './NavBar';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setMessageStatus('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <>
    <NavBar></NavBar>
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 overflow-y-hidden">Contact Us</h2>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {/* Success Message */}
          {messageStatus && (
            <div className="text-green-500 font-semibold text-center mb-4">
              {messageStatus}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-lg text-white ${isSubmitting ? 'bg-gray-500' : 'bg-yellow-500 hover:bg-yellow-600'} focus:outline-none`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactUsPage;
