import React from 'react';
import ContentLoader from 'react-content-loader';

const SkeletonInstagramSection = (props) => (
  <ContentLoader
    speed={2}
    width={1000}
    height={500}
    viewBox="0 0 1000 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="mx-auto max-w-fasco-container"
    {...props}
  >
    {/* Title */}
    <rect x="350" y="30" rx="4" ry="4" width="300" height="30" />
    
    {/* Paragraph line 1 */}
    <rect x="300" y="80" rx="3" ry="3" width="400" height="15" />
    {/* Paragraph line 2 */}
    <rect x="320" y="105" rx="3" ry="3" width="360" height="15" />

    {/* Images - 5 items */}
    <rect x="30" y="160" rx="10" ry="10" width="180" height="280" />
    <rect x="220" y="160" rx="10" ry="10" width="180" height="280" />
    <rect x="410" y="160" rx="10" ry="10" width="180" height="280" />
    <rect x="600" y="160" rx="10" ry="10" width="180" height="280" />
    <rect x="790" y="160" rx="10" ry="10" width="180" height="280" />
  </ContentLoader>
);

export default SkeletonInstagramSection;
