import React from 'react';
import ContentLoader from 'react-content-loader';

const DealsOfTheMonthSkeleton = (props) => (
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
    {/* Chap tomondagi matnlar */}
    <rect x="30" y="30" rx="4" ry="4" width="250" height="30" /> {/* Sarlavha */}
    <rect x="30" y="70" rx="3" ry="3" width="280" height="20" /> {/* Paragraf */}
    <rect x="30" y="100" rx="3" ry="3" width="220" height="20" />
    <rect x="30" y="140" rx="6" ry="6" width="100" height="35" /> {/* Buy Now button */}

    {/* Taymer (sanagich) */}
    <rect x="30" y="200" rx="4" ry="4" width="200" height="20" /> {/* Hurry... */}
    <rect x="30" y="240" rx="8" ry="8" width="45" height="45" /> {/* Days */}
    <rect x="85" y="240" rx="8" ry="8" width="45" height="45" /> {/* Hr */}
    <rect x="140" y="240" rx="8" ry="8" width="45" height="45" /> {/* Mins */}
    <rect x="195" y="240" rx="8" ry="8" width="45" height="45" /> {/* Sec */}

    {/* Rasm karuseli o‘ng tomonda */}
    <rect x="350" y="30" rx="10" ry="10" width="180" height="300" /> {/* Rasm 1 */}
    <rect x="540" y="30" rx="10" ry="10" width="180" height="300" /> {/* Rasm 2 */}
    <rect x="730" y="30" rx="10" ry="10" width="180" height="300" /> {/* Rasm 3 */}

    {/* Slayder tugmalari */}
    <circle cx="480" cy="350" r="8" />
    <circle cx="500" cy="350" r="8" />
    <circle cx="520" cy="350" r="8" />
  </ContentLoader>
);

export default DealsOfTheMonthSkeleton;
