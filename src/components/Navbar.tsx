import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              智创科技
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">首页</Link>
            <Link to="/services" className="nav-link">服务</Link>
            <Link to="/portfolio" className="nav-link">案例</Link>
            <Link to="/about" className="nav-link">关于</Link>
            <Link to="/news" className="nav-link">动态</Link>
            <Link to="/contact" className="nav-link">联系我们</Link>
          </div>

          <button 
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="mobile-nav-link">首页</Link>
            <Link to="/services" className="mobile-nav-link">服务</Link>
            <Link to="/portfolio" className="mobile-nav-link">案例</Link>
            <Link to="/about" className="mobile-nav-link">关于</Link>
            <Link to="/news" className="mobile-nav-link">动态</Link>
            <Link to="/contact" className="mobile-nav-link">联系我们</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
