import React from 'react';

interface UnderLineComponentProps {
  width?: string; // Custom width like 'w-20', 'w-32', 'w-1/2', etc.
  className?: string; // Additional custom classes
}

const UnderLineComponent: React.FC<UnderLineComponentProps> = ({ 
  width = 'w-20', 
  className = '' 
}) => {
  return (
    <div 
      className={`h-0.5 bg-gradient-to-r from-[#1e130c] to-[#3a8d8d] ${width} ${className}`}
    />
  );
};

export default UnderLineComponent;
