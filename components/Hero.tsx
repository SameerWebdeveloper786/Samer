
import React from 'react';
import Illustration from './Illustration';

const SearchIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const ChevronDownIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const PlayIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f85e5e]" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
);


const Hero: React.FC = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center lg:justify-start">
            <Illustration />
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Hire expert freelancers <br /> for any job, Online
          </h1>
          <p className="text-gray-300 md:text-lg mb-8 max-w-xl mx-auto lg:mx-0">
            Consectetur adipiscing elit sed do eiusmod tempor incuntes ut labore etdolore magna aliqua enim.
          </p>
          
          <div className="bg-white rounded-lg p-2 flex items-center shadow-lg max-w-xl mx-auto lg:mx-0 mb-8">
            <input 
              type="text"
              placeholder="I'm looking for"
              className="flex-grow bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none px-4"
            />
            <div className="h-8 border-l border-gray-200 mx-2"></div>
            <div className="flex items-center text-gray-600 cursor-pointer hover:text-gray-900 pr-2">
              <span className="whitespace-nowrap">In: Freelancers</span>
              <ChevronDownIcon />
            </div>
            <button className="bg-[#f85e5e] text-white p-3 rounded-md hover:bg-red-600 transition-colors duration-300">
              <SearchIcon />
            </button>
          </div>

          <div className="flex items-center space-x-4 justify-center lg:justify-start">
            <div className="bg-white/20 p-1 rounded-full">
              <PlayIcon />
            </div>
            <div>
              <p className="font-semibold">See For Yourself!</p>
              <p className="text-sm text-gray-400">How it works & experience the ultimate joy.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
