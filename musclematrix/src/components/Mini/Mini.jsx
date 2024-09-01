import React from 'react';

const MiniFooter = () => {
  return (
    <footer className="flex font-playfair items-center justify-center p-4 bg-gray-900 text-white text-sm md:text-base">
      <p>
        Made with <span role="img" aria-label="heart">❤️</span> by{' '}
        <span className="text-[#fb923c]">Abhay Pratap Singh</span>
      </p>
    </footer>
  );
};

export default MiniFooter;
