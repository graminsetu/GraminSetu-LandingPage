import React from 'react';
import logo from '../../assets/images/graminsetu-logo.png';


const Logo = ({ size = 'md', showText = true, className = '' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };
  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`${sizeClasses[size]} flex items-center justify-center`}>
        <img src={logo} alt="GraminSetu Logo" className="w-full h-full object-contain" />
      </div>
      {showText && (
        <span className={`font-bold text-secondary-900 ${textSizes[size]}`}>GraminSetu</span>
      )}
    </div>
  );
};

export default Logo;
