import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { motion } from "framer-motion";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import "./App.css";
import AnimatedLoader from "./components/Loading/AnimatedLoader";
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { LogIn, Search } from "lucide-react";
import ContactPage from "./components/ContactPage/ContactPage";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import { setUserFromLocalStorage } from "./features/auth/authSlice";
import { useDispatch } from "react-redux";
import Purchased from "./components/Purchased/Purchased";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const Fashion = lazy(() => import("./components/Fashion/Fashion"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // Sahifa yuklanganda foydalanuvchini localStorage'dan yuklab olish
    dispatch(setUserFromLocalStorage());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Suspense fallback={<AnimatedLoader />}>
        <Routes>
          <Route
            path="/register"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Register />
              </motion.div>
            }
          />
          <Route
            path="/signin"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Login />
              </motion.div>
            }
          />
          <Route
            path="/profile"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Profile/>
              </motion.div>
            }
          />
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
          <Route
            path="/contacts"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ContactPage />
              </motion.div>
            }
          />
          <Route
            path="/purchased"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Purchased />
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
