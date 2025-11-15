
import React from 'react';

const Header: React.FC = () => {
  const navLinks = ['Main', 'How It Works', 'Browse Jobs', 'View Freelancers'];

  const Logo = () => (
    <h1 className="text-2xl font-bold text-white tracking-wide">
      Workt
      <span className="relative inline-block">
        o
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#f85e5e] rounded-tl-full"></span>
      </span>
      rn
    </h1>
  );

  return (
    <header className="py-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-12">
          <Logo />
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <img
              src="https://picsum.photos/seed/user/40/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-transparent hover:border-white transition"
            />
            <div className="hidden sm:block text-right">
              <p className="font-semibold text-white">Louanne Mattioli</p>
              <p className="text-sm text-gray-400">Amento Tech</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
