// src/components/Skeletons/SkeletonImage.jsx

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonImage = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Skeleton circle height={100} width={100} />
      <Skeleton height={20} width={150} />
    </div>
  );
};

export default SkeletonImage;
