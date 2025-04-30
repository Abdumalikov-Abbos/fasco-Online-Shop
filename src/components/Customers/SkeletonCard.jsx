// src/components/Skeletons/SkeletonCard.jsx

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  return (
    <div className="flex space-x-4">
      <Skeleton height={250} width={200} />
      <div className="flex flex-col space-y-2">
        <Skeleton height={20} width={150} />
        <Skeleton height={15} width={120} />
        <Skeleton height={20} width={100} />
      </div>
    </div>
  );
};

export default SkeletonCard;
