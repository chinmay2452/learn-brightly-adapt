
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Puzzle, User, Info } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-pastel-blue py-2 px-4 rounded-t-2xl shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-around items-center">
        <Link to="/" className={`flex flex-col items-center p-2 ${isActive('/') ? 'bg-white/30 rounded-xl' : ''}`}>
          <Home className={`h-6 w-6 ${isActive('/') ? 'text-primary' : ''}`} />
          <span className="text-xs font-bold mt-1">Home</span>
        </Link>
        
        <Link to="/reading" className={`flex flex-col items-center p-2 ${isActive('/reading') ? 'bg-white/30 rounded-xl' : ''}`}>
          <BookOpen className={`h-6 w-6 ${isActive('/reading') ? 'text-primary' : ''}`} />
          <span className="text-xs font-bold mt-1">Reading</span>
        </Link>
        
        <Link to="/games" className={`flex flex-col items-center p-2 ${isActive('/games') ? 'bg-white/30 rounded-xl' : ''}`}>
          <Puzzle className={`h-6 w-6 ${isActive('/games') ? 'text-primary' : ''}`} />
          <span className="text-xs font-bold mt-1">Games</span>
        </Link>
        
        <Link to="/dyslexia" className={`flex flex-col items-center p-2 ${isActive('/dyslexia') ? 'bg-white/30 rounded-xl' : ''}`}>
          <Info className={`h-6 w-6 ${isActive('/dyslexia') ? 'text-primary' : ''}`} />
          <span className="text-xs font-bold mt-1">Dyslexia</span>
        </Link>
        
        <Link to="/profile" className={`flex flex-col items-center p-2 ${isActive('/profile') ? 'bg-white/30 rounded-xl' : ''}`}>
          <User className={`h-6 w-6 ${isActive('/profile') ? 'text-primary' : ''}`} />
          <span className="text-xs font-bold mt-1">Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
