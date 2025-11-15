
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#2a2155] bg-gradient-to-br from-[#2a2155] via-[#241d44] to-[#3a203f] text-white overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-purple-500/10 rounded-full"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-72 h-72 bg-red-500/10 rounded-full"></div>
      <div className="absolute top-1/4 right-1/4 w-12 h-12 border-2 border-white/10 rounded-full"></div>
      <div className="absolute bottom-1/3 left-1/4 w-8 h-8 border border-white/10 transform rotate-45"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default App;
