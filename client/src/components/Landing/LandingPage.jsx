import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [isFilling, setIsFilling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;

      // Trigger filling the welcome text when scrolling starts
      if (position > 0 && !isFilling) {
        setIsFilling(true);
      }

      // Show login form when user scrolls past 60% of the viewport height
      if (position > window.innerHeight * 0.5) {
        setShowLogin(true);
      }

      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFilling]);

  const goToHomePage = () => {
    navigate('/dashboard');
  };

  // Calculate the transition class based on scroll position
  const transitionClass =
    scrollPosition > window.innerHeight * 0.5
      ? 'bg-white text-black border border-gray-300'
      : 'bg-gray-800 text-white border border-transparent';

  return (
    <div style={{ height: '200vh', backgroundColor: 'black' }}>
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center text-white bg-gradient-to-br from-gray-800 to-gray-900">
        <h1 className={`text-5xl font-bold transition-opacity duration-1000 ${isFilling ? 'opacity-100' : 'opacity-0'}`}>
          <span className={`inline-block ${isFilling ? 'animate-fillText' : ''}`}>
            Welcome to VISION
          </span>
        </h1>
        <p className={`mt-4 text-xl transition-opacity duration-1000 delay-200 ${isFilling ? 'opacity-100' : 'opacity-0'}`}>
          Vocational Integration System for Industry-Oriented Nurturing
        </p>
        <p className={`mt-8 text-lg transition-opacity duration-1000 delay-300 ${isFilling ? 'opacity-100' : 'opacity-0'}`}>
          Scroll down to explore
        </p>
        <p className={`mt-4 text-lg transition-opacity duration-1000 delay-400 ${isFilling ? 'opacity-100' : 'opacity-0'}`}>
          Keep scrolling to reach the login page!
        </p>
      </section>

      {/* Information Section */}
      <section
        className={`flex flex-col justify-center items-center text-white p-10 bg-black transform transition-transform duration-700 ease-in-out ${
          scrollPosition > 100 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <h2 className="text-4xl font-bold mb-4">About VISION</h2>
        <p className="text-lg max-w-xl text-center mb-4">
          VISION is designed to bridge the gap between vocational training and industry requirements, ensuring that individuals are equipped with the skills necessary for their professional growth.
        </p>
        <p className="text-lg max-w-xl text-center">
          Our platform provides personalized pathways for learners to achieve their career goals through industry partnerships and hands-on training experiences.
        </p>
      </section>

      {/* Increased gap between sections */}
      <div className="h-20" /> {/* Adjust height as needed */}

      {/* Login Form Section */}
      {showLogin && (
        <section
          className={`flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24 transition-all duration-1000 ease-in-out ${transitionClass} rounded-md shadow-lg`}
        >
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center">
              <img src="/vision.png" className="mr-3 h-[100px]" alt="Vision Logo" />
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight animate-fadeIn">
              Log in to your account
            </h2>
            <p className="mt-2 text-center text-sm animate-fadeIn delay-700">
              Don't have an account?{' '}
              <a href="#" className="font-semibold text-gray-400 transition-all duration-200 hover:underline">
                Create a free account
              </a>
            </p>
            <form onSubmit={(e) => { e.preventDefault(); goToHomePage(); }} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label htmlFor="email" className="text-base font-medium">Email address</label>
                  <input
                    id="email"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-700 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-base font-medium">Password</label>
                  <input
                    id="password"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-700 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-orange-600"
                  >
                    Get started <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <button className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-gray-700 px-3.5 py-2.5 font-semibold text-gray-400 transition-all duration-200 hover:bg-gray-600 hover:text-white">
                Sign in with Google
              </button>
              <button className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-gray-700 px-3.5 py-2.5 font-semibold text-gray-400 transition-all duration-200 hover:bg-gray-600 hover:text-white">
                Sign in with Facebook
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default LandingPage;
