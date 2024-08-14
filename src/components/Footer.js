import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 p-6 mt-8 text-center">
      <div className="container mx-auto">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Sidra . All rights reserved.</p>
        <p className="text-gray-400 mt-2">
          <a href="#" className="hover:text-teal-400 transition duration-300">Privacy Policy</a> | 
          <a href="#" className="hover:text-teal-400 transition duration-300 ml-2">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
