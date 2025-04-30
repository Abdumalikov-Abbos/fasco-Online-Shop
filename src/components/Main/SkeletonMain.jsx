// src/components/Skeletons/SkeletonMain.jsx

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonMain = () => {
  return (
    <div className="flex flex-col items-center">
      <Skeleton height={400} width={500} />
      <Skeleton height={40} width={250} className="mt-4" />
    </div>
  );
};

export default SkeletonMain;
