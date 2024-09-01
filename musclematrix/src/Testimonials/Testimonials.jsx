import React from 'react';

const GymAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray- text-center px-4">
      <lottie-player
        src="https://lottie.host/b294768f-6683-4a3c-9b90-b691d6d1cc40/imh9rZf3Xo.json"
        // background="fals"
        speed="1"
        style={{ width: '300px', height: '300px' }}
        loop
        autoplay
        direction="1"
        mode="normal"
      >
      </lottie-player>
      <h1 className="mt-6 uppercase font-[Unbounded] text-xl font-semibold md:text-2xl lg:text-3xl">
        Every jump, every step you take, brings you closer to your <span className='text-secondary'>goals.</span> 
      </h1>
    </div>
  );
};

export default GymAnimation;



