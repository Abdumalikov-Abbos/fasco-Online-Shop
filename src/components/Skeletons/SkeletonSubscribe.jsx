import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonSubscribe = (props) => (
  <ContentLoader
    speed={2}
    width={1000}
    height={400}
    viewBox="0 0 1000 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="mx-auto max-w-fasco-container"
    {...props}
  >
    {/* Left image block */}
    <rect x="40" y="50" rx="12" ry="12" width="140" height="280" />

    {/* Title */}
    <rect x="300" y="60" rx="4" ry="4" width="400" height="30" />
    {/* Paragraph */}
    <rect x="300" y="100" rx="3" ry="3" width="380" height="16" />
    <rect x="300" y="120" rx="3" ry="3" width="360" height="16" />

    {/* Email input */}
    <rect x="300" y="160" rx="6" ry="6" width="320" height="40" />
    {/* Subscribe button */}
    <rect x="640" y="160" rx="6" ry="6" width="120" height="40" />

    {/* Right image block */}
    <rect x="840" y="50" rx="12" ry="12" width="120" height="280" />

    {/* Footer */}
    <rect x="60" y="350" rx="2" ry="2" width="100" height="14" />
    <rect x="300" y="350" rx="2" ry="2" width="400" height="14" />
  </ContentLoader>
);

export default SkeletonSubscribe;
