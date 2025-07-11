import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-4">We’d love to hear from you. Reach us through any of the following methods:</p>

      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Email:</strong>{' '}
          <a href="mailto:support@yourdomain.com" className="text-blue-600 underline">
            support@yourdomain.com
          </a>
        </li>
        <li>
          <strong>Phone:</strong> +91 98765 43210
        </li>
        <li>
          <strong>Address:</strong> 123 Main Street, Mumbai, India
        </li>
      </ul>
    </div>
  );
};

export default Contact;
