import React, { useState } from 'react';
import DockItems from '../components/DockItems'; // Import the DockItems component

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        const errorData = await res.json();
        console.error('Error sending message:', errorData);
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="contact-container mx-auto">
      <div className="email-container p-8 bg-bold-text text-light-text rounded-3xl shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-background">Contact Me</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg"
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg"
            required
          />
          <button type="submit" className="p-2 bg-foreground text-white rounded-lg w-max mx-auto">
            Send Message
          </button>
        </form>
        {status && <p className="mt-4">{status}</p>}
      </div>
      <DockItems />
    </div>
  );
}