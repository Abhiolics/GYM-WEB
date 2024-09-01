import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-10 py-12 rounded-tl-[20px] rounded-tr-[20px] text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and About Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-4 font-[Unbounded]">MUSCLE <span className='text-secondary '>MATRIX</span></h2>
           
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0 uppercase font-playfair">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#home" className="hover:text-white">Home</a>
              </li>
              <li className="mb-2">
                <a href="#about" className="hover:text-white">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#services" className="hover:text-white">Services</a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3 font-playfair">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <p className="mb-2">Sector - 12 Fitness Ave, Suite 100</p>
            <p className="mb-2">Fitness City, Lucknow</p>
            <p className="mb-2">Email: contact@musclematrix.com</p>
            <p>Phone: +1 (555) 994-4456</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.5 0-10 4.49-10 10.03 0 4.45 3.66 8.17 8.39 8.92v-6.3H7.89v-2.63h2.5V9.42c0-2.5 1.52-3.87 3.74-3.87 1.06 0 1.97.08 2.24.11v2.6h-1.53c-1.2 0-1.44.57-1.44 1.41v1.85h2.87l-.37 2.63h-2.5V21c4.73-.75 8.39-4.47 8.39-8.92 0-5.54-4.5-10.03-10-10.03z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2c-5.523 0-10 4.477-10 10 0 4.411 2.865 8.167 6.839 9.498.5.092.682-.217.682-.482v-1.722c-2.78.605-3.36-1.346-3.36-1.346-.454-1.161-1.11-1.471-1.11-1.471-.908-.62.069-.607.069-.607 1.002.07 1.528 1.029 1.528 1.029.892 1.53 2.341 1.089 2.91.832.092-.646.349-1.088.635-1.338-2.219-.252-4.555-1.113-4.555-4.95 0-1.092.39-1.986 1.029-2.683-.104-.253-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.025.799-.223 1.654-.335 2.507-.339.853.004 1.709.116 2.508.339 1.91-1.295 2.75-1.025 2.75-1.025.545 1.376.202 2.393.099 2.646.64.697 1.028 1.591 1.028 2.683 0 3.845-2.338 4.694-4.564 4.943.359.309.68.92.68 1.853v2.75c0 .266.181.575.688.478C19.137 20.165 22 16.41 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
          </div>
          <p className="text-sm mt-4">&copy; {new Date().getFullYear()} MuscleMatrix. All rights reserved.</p>
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;
