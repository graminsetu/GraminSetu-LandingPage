import React from 'react';
import logo from '../../assets/images/graminsetu-logo.png';

// Loader variants: 'default', 'pulse', 'bounce', 'spin'
const Loader = ({ size = 'md', text, className = '', variant = 'default' }) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-28 h-28',
    xl: 'w-36 h-36',
  };
  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };
  const renderLoader = () => {
    switch (variant) {
      case 'pulse':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <div className="absolute inset-0 bg-gramin-600 rounded-full animate-ping opacity-75"></div>
            <div className="relative bg-gramin-600 rounded-full w-full h-full flex items-center justify-center">
              <img src={logo} alt="GraminSetu" className="w-5/6 h-5/6 object-contain" />
            </div>
          </div>
        );
      case 'bounce':
        return (
          <div className={`${sizeClasses[size]} animate-bounce`}>
            <img src={logo} alt="GraminSetu" className="w-full h-full object-contain" />
          </div>
        );
      case 'spin':
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <div className="w-full h-full rounded-full border-4 border-gramin-200 border-t-gramin-600 animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img src={logo} alt="GraminSetu" className="w-5/6 h-5/6 object-contain" />
            </div>
          </div>
        );
      default:
        return (
          <div className={`${sizeClasses[size]} relative`}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gramin-400 via-gramin-600 to-gramin-800 animate-spin"></div>
            <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
              <img src={logo} alt="GraminSetu" className="w-5/6 h-5/6 object-contain" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gramin-600 opacity-20 animate-pulse"></div>
          </div>
        );
    }
  };
  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      {renderLoader()}
      {text && (
        <div className={`text-center ${textSizes[size]}`}>
          <p className="text-gramin-600 font-medium">{text}</p>
          <div className="flex justify-center space-x-1 mt-2">
            <div className="w-2 h-2 bg-gramin-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-gramin-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-gramin-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loader;
