import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonHeader = ({ ...rest }) => (
  <ContentLoader 
    className="mx-auto max-w-fasco-container"
    height={80} 
    width={1000} 
    viewBox="0 0 1000 80" 
    {...rest}
  >
    {/* Logo */}
    <rect x="20" y="20" rx="4" ry="4" width="80" height="20" />

    {/* Navigation links */}
    <rect x="150" y="20" rx="4" ry="4" width="70" height="20" />
    <rect x="230" y="20" rx="4" ry="4" width="70" height="20" />
    <rect x="310" y="20" rx="4" ry="4" width="70" height="20" />
    <rect x="390" y="20" rx="4" ry="4" width="70" height="20" />

    {/* Icons */}
    <circle cx="900" cy="30" r="10" />
    <circle cx="930" cy="30" r="10" />
    <circle cx="960" cy="30" r="10" />
  </ContentLoader>
)

SkeletonHeader.metadata = {
  name: 'ChatGPT',
  github: 'openai',
  description: 'Skeleton for the navbar/header like FASCO style',
  filename: 'SkeletonHeader',
}

export default SkeletonHeader
