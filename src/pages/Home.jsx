// import React, { lazy, Suspense } from "react";
// // import Header from "../components/Header/Header";
// // import Main from "../components/Main/Main";
// // import NewArivals from "../components/NewArivals/NewArivals";
// // import Deals from "../components/Deals/Deals";
// // import Ad from "../components/Add/Add";
// // import Follow from "../components/Follow/Follow";
// // import Customer from "../components/Customers/Customer";
// // import Subscribe from "../components/Subscribe/Subscribe";

// const  Header = lazy(() => import("../components/Header/Header")); 
// const  Main  = lazy (() => import("../components/Main/Main")); 
// const  NewArivals = lazy (() => import("../components/NewArivals/NewArivals")); 
// const  Deals   = lazy (() => import("../components/Deals/Deals"));
// // const  Ad   = lazy (() => import("../components/Add/Add")); 
// const  Follow  = lazy (() => import("../components/Follow/Follow")); 
// const  Customer  = lazy (() => import("../components/Customers/Customer")); 
// const  Subscribe  = lazy (() => import("../components/Subscribe/Subscribe"));

// const Home = () => {
//   return (
//     <div className="min-h-screen ">
//       <Suspense fallback={<div>Loading...</div>}>  
//       <Header />
//       <Main />
//       <Deals/>
//       <NewArivals />
//       {/* <Ad/>  */}
//       <Follow/>
//       <Customer/>
//       <Subscribe/>
//       </Suspense>
//     </div>
//   );
// };

// export default Home;

// import React, { lazy, Suspense } from "react";


// src/pages/Home.jsx

// src/pages/Home.jsx

import React, { lazy, Suspense } from "react";


// Skeleton Components
import SkeletonHeader from "../components/Skeletons/SkeletonsHeader";
import SkeletonMain from "../components/Skeletons/SkeletonsMain";
import SkeletonCard from "../components/Skeletons/SkeletonCustomer";
import SkeletonImage from "../components/Skeletons/SkeletonFollow";
import SkeletonDeals from "../components/Skeletons/SkeletonDeals";
import SkeletonArrivals from "../components/Skeletons/SkeletonArrivals";
import SkeletonFollow from "../components/Skeletons/SkeletonFollow";
import SkeletonCustomer from "../components/Skeletons/SkeletonCustomer";
import SkeletonSubscribe from "../components/Skeletons/SkeletonSubscribe";
// Lazy-loaded Components
const Header = lazy(() => import("../components/Header/Header"));
const Main = lazy(() => import("../components/Main/Main"));
const NewArrivals = lazy(() => import("../components/NewArivals/NewArivals"));
const Deals = lazy(() => import("../components/Deals/Deals"));
const Follow = lazy(() => import("../components/Follow/Follow"));
const Customer = lazy(() => import("../components/Customers/Customer"));
const Subscribe = lazy(() => import("../components/Subscribe/Subscribe"));

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Header Suspense */}
      <Suspense fallback={<SkeletonHeader />}>
        <Header />
      </Suspense>

      {/* Main Section with Skeleton */}
      <Suspense fallback={<SkeletonMain/>}>
        <Main />
      </Suspense>

      {/* New Arrivals Section */}
      <Suspense fallback={<SkeletonArrivals />}>
        <NewArrivals />
      </Suspense>

      {/* Deals Section */}
      <Suspense fallback={<SkeletonDeals />}>
        <Deals />
      </Suspense>

      {/* Follow Us Section */}
      <Suspense fallback={<SkeletonFollow />}>
        <Follow />
      </Suspense>

      {/* Customer Section */}
      <Suspense fallback={<SkeletonCustomer />}>
        <Customer />
      </Suspense>

      {/* Subscribe Section */}
      <Suspense fallback={<SkeletonSubscribe />}>
        <Subscribe />
      </Suspense>

      {/* Footer Section */}
      {/* <div className="bg-gray-200 h-24 py-8">Footer Section</div> */}
    </div>
  );
};

export default Home;
