import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Redirect to login when user scrolls beyond the height of the page
      if (scrollPosition > windowHeight * 0.9) {
        navigate('/login'); // Programmatic navigation to login page
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [navigate]);

  return (
    <section className="h-screen bg-gradient-to-br from-pink-500 to-purple-700 flex flex-col justify-center items-center text-center text-white">
      <h1 className="text-5xl font-bold">Welcome to Vishesh's Cool Website</h1>
      <p className="mt-4 text-xl">Scroll down to explore</p>
      <p className="mt-8 text-lg">Keep scrolling to reach the login page!</p>
    </section>
  );
};

export default LandingPage;
