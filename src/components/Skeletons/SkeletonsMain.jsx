import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonMain = ({ ...rest }) => (
  <ContentLoader className='mx-auto max-w-fasco-container ' height="1000" width="1000" viewBox="0 0 265 310" {...rest}>
    <rect x="15" y="15" rx="4" ry="4" width="350" height="25" />
    <rect x="15" y="50" rx="2" ry="2" width="350" height="150" />

    {/* Pastdagi 5 ta element, orasini ochib joylashtirilgan */}
    <rect x="15" y="230" rx="2" ry="2" width="40" height="20" />
    <rect x="65" y="230" rx="2" ry="2" width="40" height="20" />
    <rect x="115" y="230" rx="2" ry="2" width="40" height="20" />
    <rect x="165" y="230" rx="2" ry="2" width="40" height="20" />
    <rect x="215" y="230" rx="2" ry="2" width="40" height="20" />
  </ContentLoader>
)

SkeletonMain.metadata = {
  name: 'Didier Munezero',
  github: 'didiermunezero',
  description: 'Grid for content of head and body',
  filename: 'SkeletonHeader',
}

export default SkeletonMain