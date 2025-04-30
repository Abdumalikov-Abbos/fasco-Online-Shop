import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonTestimonials = (props) => (
  <ContentLoader
    speed={2}
    width={1000}
    height={450}
    viewBox="0 0 1000 450"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="mx-auto max-w-fasco-container"
    {...props}
  >
    {/* Title */}
    <rect x="320" y="30" rx="4" ry="4" width="360" height="30" />
    {/* Subtext */}
    <rect x="300" y="75" rx="3" ry="3" width="400" height="16" />

    {/* Left card (blurred/partially visible) */}
    <rect x="80" y="140" rx="12" ry="12" width="200" height="200" />

    {/* Center/main testimonial card */}
    <rect x="300" y="130" rx="12" ry="12" width="400" height="220" />
    {/* Profile image */}
    <rect x="320" y="150" rx="10" ry="10" width="70" height="70" />
    {/* Text block */}
    <rect x="410" y="150" rx="3" ry="3" width="250" height="15" />
    <rect x="410" y="170" rx="3" ry="3" width="220" height="15" />
    {/* Stars */}
    <rect x="410" y="200" rx="3" ry="3" width="100" height="15" />
    {/* Name */}
    <rect x="410" y="230" rx="4" ry="4" width="120" height="18" />
    {/* Job */}
    <rect x="410" y="255" rx="4" ry="4" width="100" height="14" />

    {/* Right card (blurred/partially visible) */}
    <rect x="720" y="140" rx="12" ry="12" width="200" height="200" />

    {/* Slider buttons */}
    <circle cx="470" cy="380" r="10" />
    <circle cx="510" cy="380" r="10" />
  </ContentLoader>
);

export default SkeletonTestimonials;
