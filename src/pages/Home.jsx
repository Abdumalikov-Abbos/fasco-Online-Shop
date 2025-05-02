import React, { lazy, Suspense, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import skeleton komponentlari
import SkeletonHeader from "../components/Skeletons/SkeletonsHeader";
import SkeletonMain from "../components/Skeletons/SkeletonsMain";
import SkeletonArrivals from "../components/Skeletons/SkeletonArrivals";
import SkeletonDeals from "../components/Skeletons/SkeletonDeals";
import SkeletonFollow from "../components/Skeletons/SkeletonFollow";
import SkeletonCustomer from "../components/Skeletons/SkeletonCustomer";
import SkeletonSubscribe from "../components/Skeletons/SkeletonSubscribe";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Chat from "../components/Chat/Chat";

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
    <div
      style={{ width: `${progress}%`, height: "4px", background: "blue" }}
    ></div>
  );
};

const LazyImage = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      style={{
        filter: isLoaded ? "blur(0)" : "blur(10px)",
        transition: "filter 0.3s ease-out",
      }}
      onLoad={() => setIsLoaded(true)}
    />
  );
};

const Home = () => {
  const [unreadMessages, setUnreadMessages] = useState(0); // Yangi xabarlar soni
  const botToken = "7134710361:AAHQ1fYZQakF6RbNOR5ifKosUhF7uPSrqpk"; // Bot tokeni
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const fetchMessages = async () => {
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/getUpdates`,
      );
      const data = await response.json();

      if (data.ok) {
        const newMessagesCount = data.result.filter(
          (update) => update.message?.text,
        ).length;
        setUnreadMessages(newMessagesCount); // Yangi xabarlar sonini yangilash
      }
    } catch (error) {
      console.error("Xabarlarni olishda xato:", error);
    }
  };
  useEffect(() => {
    const interval = setInterval(fetchMessages, 3000); // Har 3 soniyada yangilanish
    return () => clearInterval(interval); // O'chirish
  }, []);

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

      <div className="fixed bottom-6 right-14 z-50">
        {/* Chat butoni */}
        <button
          onClick={() => setIsOpen(true)}
          className={`relative w-14 h-14 flex items-center justify-center rounded-full shadow-md transition duration-300
      ${
        unreadMessages > 0
          ? "bg-red-500 text-black animate-bounce"
          : "bg-gray text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
      }`}
          title="Chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
          </svg>

          {unreadMessages > 0 && (
            <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-600 text-red text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
              {unreadMessages}
            </span>
          )}
        </button>

        {/* Chat Modal */}
        <Chat
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          unreadMessages={unreadMessages}
        />
      </div>
    </div>
  );
};

export default Home;
