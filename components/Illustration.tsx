
import React from 'react';

const Illustration: React.FC = () => {
  return (
    <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
      {/* Background shape */}
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.2))' }}
      >
        <circle cx="100" cy="100" r="90" fill="rgba(255, 255, 255, 0.05)" />
        <circle cx="100" cy="100" r="80" fill="#3c326b" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      </svg>
      
      {/* Floating Icons */}
      <div className="absolute top-[10%] left-[10%] w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '4s' }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#5446a6]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </div>

      <div className="absolute top-[20%] right-[5%] w-14 h-14 bg-[#f9c84b] rounded-full flex items-center justify-center shadow-lg animate-pulse">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </div>

      <div className="absolute top-[45%] right-[-5%] w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg transform rotate-12 animate-pulse" style={{ animationDelay: '1s' }}>
         <div className="w-12 h-12 bg-[#2c98f0] rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
         </div>
      </div>

      <div className="absolute bottom-[10%] left-0 w-12 h-12 bg-[#26c280] rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '5s' }}>
        <span className="text-white font-bold text-2xl">$</span>
      </div>

       <div className="absolute bottom-[5%] right-[20%] w-14 h-14 bg-[#f9c84b] rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>

      {/* Main Character */}
      <div className="absolute inset-0 flex flex-col items-center justify-end">
        <div className="w-64 h-auto">
            {/* Person SVG */}
            <svg viewBox="0 0 150 150" className="w-full h-auto">
                <defs>
                    <clipPath id="person-clip">
                        <path d="M 50 150 L 50 80 Q 50 40, 75 40 Q 100 40, 100 80 L 100 150 Z" />
                    </clipPath>
                </defs>
                {/* Legs */}
                <rect x="60" y="130" width="10" height="20" fill="#4a4276"/>
                <rect x="80" y="130" width="10" height="20" fill="#4a4276"/>
                {/* Shoes */}
                <ellipse cx="65" cy="148" rx="7" ry="2" fill="#333"/>
                <ellipse cx="85" cy="148" rx="7" ry="2" fill="#333"/>
                {/* Body */}
                <path d="M60 80 H 90 V 130 H 60 Z" fill="#fff"/>
                <path d="M60 80 L 75 100 L 90 80 Z" fill="#f85e5e"/>
                <path d="M60 80 H 90 L 75 105 Z" fill="#f0f0f0"/>

                {/* Head */}
                <circle cx="75" cy="55" r="20" fill="#ffdeca"/>
                {/* Hair */}
                <path d="M 55 55 A 20 20 0 0 1 95 55 L 90 40 L 80 35 L 70 35 L 60 40 Z" fill="#c2395a"/>
                {/* Glasses */}
                <rect x="62" y="52" width="10" height="5" rx="1" fill="none" stroke="#333" strokeWidth="1"/>
                <rect x="78" y="52" width="10" height="5" rx="1" fill="none" stroke="#333" strokeWidth="1"/>
                <line x1="72" y1="54.5" x2="78" y2="54.5" stroke="#333" strokeWidth="1"/>
                {/* Smile */}
                <path d="M 70 65 Q 75 70 80 65" fill="none" stroke="#333" strokeWidth="1"/>
            </svg>
        </div>
        <div className="bg-white text-gray-800 font-bold py-4 px-8 rounded-lg shadow-xl text-center transform -translate-y-24">
            LET'S WORK <br /> TOGETHER
        </div>
      </div>
    </div>
  );
};

export default Illustration;
