// src/components/Skeletons/SkeletonHeader.jsx

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonHeader = () => {
  return (
    <div className="p-4">
      <Skeleton height={50} width={200} />
      <div className="mt-4">
        <Skeleton height={20} width={150} />
        <Skeleton height={20} width={120} />
      </div>
    </div>
  );
};

export default SkeletonHeader;
