// src/components/Skeletons/SkeletonMain.jsx

import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonMain = () => {
  return (
    <div className="p-4">
      <Skeleton height={300} width={500} />
      <div className="mt-4">
        <Skeleton height={40} width={300} />
        <Skeleton height={40} width={250} className="mt-4" />
      </div>
    </div>
  );
};

export default SkeletonMain;
