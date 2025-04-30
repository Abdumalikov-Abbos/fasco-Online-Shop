import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import "./App.css";
import AnimatedLoader from "./components/Loading/AnimatedLoader";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import Chat from "./components/Chat/Chat";
import Checkout from "./components/Checkout/Checkout";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const Fashion = lazy(() => import("./components/Fashion/Fashion"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<AnimatedLoader />}>
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="/shop"
            element={
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <Fashion />
              </motion.div>
            }
          />

          <Route
            path="/product/:id"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Product />
              </motion.div>
            }
          />

          <Route
            path="/cart"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Cart />
              </motion.div>
            }
          />
          <Route
            path="/checkout"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Checkout />
              </motion.div>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
