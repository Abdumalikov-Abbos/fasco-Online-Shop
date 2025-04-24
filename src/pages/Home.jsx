import React, { lazy, Suspense, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

// Import skeleton komponentlari
import SkeletonHeader from "../components/Skeletons/SkeletonsHeader";
import SkeletonMain from "../components/Skeletons/SkeletonsMain";
import SkeletonArrivals from "../components/Skeletons/SkeletonArrivals";
import SkeletonDeals from "../components/Skeletons/SkeletonDeals";
import SkeletonFollow from "../components/Skeletons/SkeletonFollow";
import SkeletonCustomer from "../components/Skeletons/SkeletonCustomer";
import SkeletonSubscribe from "../components/Skeletons/SkeletonSubscribe";
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

// Lazy-loaded Components
const Header = lazy(() => import("../components/Header/Header"));
const Main = lazy(() => import("../components/Main/Main"));
const NewArrivals = lazy(() => import("../components/NewArivals/NewArivals"));
const Deals = lazy(() => import("../components/Deals/Deals"));
const Follow = lazy(() => import("../components/Follow/Follow"));
const Customer = lazy(() => import("../components/Customers/Customer"));
const Subscribe = lazy(() => import("../components/Subscribe/Subscribe"));

const LoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: `${progress}%`, height: "4px", background: "blue" }}></div>
  );
};

const LazyImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      style={{
        filter: isLoaded ? 'blur(0)' : 'blur(10px)',
        transition: 'filter 0.3s ease-out',
      }}
      onLoad={() => setIsLoaded(true)}
    />
  );
};

const Home = () => {
  const { ref: arrivalsRef, inView: arrivalsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: dealsRef, inView: dealsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: followRef, inView: followInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: customerRef, inView: customerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: subscribeRef, inView: subscribeInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen">
      {/* Loading bar (yuklanish indicatori) */}
      <Suspense fallback={<LoadingBar />}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
        </motion.div>
      </Suspense>

      {/* Main Section */}
      <ErrorBoundary>
        <Suspense fallback={<SkeletonMain />}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Main />
          </motion.div>
        </Suspense>
      </ErrorBoundary>

      {/* New Arrivals Section */}
      <ErrorBoundary>
        <Suspense fallback={<SkeletonArrivals />}>
          {arrivalsInView && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <NewArrivals />
            </motion.div>
          )}
        </Suspense>
      </ErrorBoundary>
      <div ref={arrivalsRef}></div>

      {/* Deals Section */}
      <ErrorBoundary>
        <Suspense fallback={<SkeletonDeals />}>
          {dealsInView && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Deals />
            </motion.div>
          )}
        </Suspense>
      </ErrorBoundary>
      <div ref={dealsRef}></div>

      {/* Follow Us Section */}
      <ErrorBoundary>
        <Suspense fallback={<SkeletonFollow />}>
          {followInView && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Follow />
            </motion.div>
          )}
        </Suspense>
      </ErrorBoundary>
      <div ref={followRef}></div>

      {/* Customer Section */}
      <ErrorBoundary>
        <Suspense fallback={<SkeletonCustomer />}>
          {customerInView && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Customer />
            </motion.div>
          )}
        </Suspense>
      </ErrorBoundary>
      <div ref={customerRef}></div>

      {/* Subscribe Section */}
      <ErrorBoundary>
        <Suspense fallback={<SkeletonSubscribe />}>
          {subscribeInView && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Subscribe />
            </motion.div>
          )}
        </Suspense>
      </ErrorBoundary>
      <div ref={subscribeRef}></div>

    </div>
  );
};

export default Home;
