import React from "react";

const SkeletonCard = () => {
  return (
    <div className="w-full md:w-60 h-72 bg-gray-200 p-4 rounded-lg animate-pulse">
      <div className="w-full h-32 bg-gray-300 rounded-lg mb-4"></div>
      
      <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
      <div className="w-1/2 h-4 bg-gray-300 rounded mb-4"></div>
      
      <div className="w-2/3 h-10 bg-gray-300 rounded"></div>
    </div>
  );
};

export default SkeletonCard;
