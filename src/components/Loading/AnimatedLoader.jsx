
import { motion } from "framer-motion";

const bounceTransition = {
  y: {
    duration: 0.6,
    yoyo: Infinity,
    ease: "easeOut"
  },
};

const BubblesLoading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="flex gap-2">
        <motion.span
          className="w-4 h-4 bg-black rounded-full"
          transition={bounceTransition}
          animate={{ y: ["100%", "-100%"] }}
        />
        <motion.span
          className="w-4 h-4 bg-black rounded-full"
          transition={{ ...bounceTransition, delay: 0.2 }}
          animate={{ y: ["100%", "-100%"] }}
        />
        <motion.span
          className="w-4 h-4 bg-black rounded-full"
          transition={{ ...bounceTransition, delay: 0.4 }}
          animate={{ y: ["100%", "-100%"] }}
        />
      </div>
    </div>
  );
};

export default BubblesLoading;
