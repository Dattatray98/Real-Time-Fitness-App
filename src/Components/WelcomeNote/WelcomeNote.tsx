import React, { useEffect, useState } from 'react';

const WelcomeNote: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Trigger the animation once the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="absolute top-19 left-10 z-10">
      <div
        className={`transition-all duration-1000 ease-in-out transform ${
          isVisible ? 'translate-x-0' : '-translate-x-full'
        } bg-transparent p-4 rounded-lg shadow-lg text-white`}
      >
        <h1 className="text-4xl font-bold"> Welcome to Real-Time Fitness Tracker!</h1>
        <p className="ml-10 text-lg left-16">Let’s Get Moving!</p>
      </div>
    </div>
  );
};

export default WelcomeNote;
