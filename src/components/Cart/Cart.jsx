import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ScrollToTop from "../../Ui/ScrollToTop";
import Subscribe from "../Subscribe/Subscribe";

import Arrow from "../../Img/Logo/Arrow.svg";
import Search from "../../Img/Logo/Search.svg";
import Market from "../../Img/Logo/Market.svg";
import Star from "../../Img/Logo/Star.svg";
import User from "../../Img/Logo/User.svg";

export default function Cart() {
  const [count, setCount] = useState(1);
  const [check, setCheck] = useState(false);
  const [open, setOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState(() => {
    const storedProducts = localStorage.getItem("cartProducts");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state;

  const handleClick = () => {
    setOpen(!open);
  };

  // ✅ Mahsulotni bir marta qo‘shish va location.state ni tozalash
  useEffect(() => {
    if (product) {
      setCartProducts((prev) => {
        const isAlreadyInCart = prev.some((item) => item.id === product.id);
        if (!isAlreadyInCart) {
          const updated = [...prev, product];
          localStorage.setItem("cartProducts", JSON.stringify(updated));
          return updated;
        }
        return prev;
      });

      // ❗ location.state ni tozalash
      navigate(location.pathname, { replace: true });
    }
  }, [product, location.pathname, navigate]);

  const handleModalIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleModalDecrement = () => {
    setCount((prev) => Math.max(1, prev - 1));
  };

  const formatNumber = (num) => num.toString().padStart(2, "0");

  const fullPrice = (price) => {
    let result = price * count;
    if (check) {
      result += 10;
    }
    return result;
  };

  const removeProduct = (id) => {
    const updated = cartProducts.filter((item) => item.id !== id);
    setCartProducts(updated);
    localStorage.setItem("cartProducts", JSON.stringify(updated));
  };

  return (
    <div className="max-w-fasco-container mx-auto">
      <header className="pt-[52px] flex justify-between items-center">
        <div className="pl-8">
          <h3 className="text-5xl volkhov-bold">FASCO</h3>
        </div>

        <nav className="flex items-center gap-12 text-lg mx-auto">
          <ScrollToTop />
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/shop" className="link">
            Shop
          </Link>
          <Link to="/products" className="link">
            Products
          </Link>

          <div
            className="grid items-center relative"
            style={{ minHeight: "50px" }}
          >
            <div className="flex items-center">
              <span className="pr-2">Pages</span>
              <button
                className={open ? "rotate-180" : ""}
                onClick={handleClick}
              >
                <img src={Arrow} alt="Toggle" />
              </button>
            </div>
            {open && (
              <div className="absolute top-full left-0 grid bg-white">
                <span className="link cursor-pointer">Page 1</span>
                <span className="link cursor-pointer">Page 2</span>
                <span className="link cursor-pointer">Page 3</span>
              </div>
            )}
          </div>
        </nav>

        <div className="flex gap-4 pr-8 relative">
          <img
            src={Search}
            alt="Search"
            className="hover:opacity-85 duration-500 cursor-pointer"
          />
          <img
            src={User}
            alt="User"
            className="hover:opacity-85 duration-500 cursor-pointer"
          />
          <img
            src={Star}
            alt="Star"
            className="hover:opacity-85 duration-500 cursor-pointer"
          />

          <div className="relative">
            <img
              src={Market}
              alt="Market"
              className="hover:opacity-85 duration-500 cursor-pointer"
            />
            {cartProducts.length > 0 && (
              <Link
                to={"/cart"}
                className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
              >
                {cartProducts.length}
              </Link>
            )}
          </div>
        </div>
      </header>

      <section>
        <div className="grid justify-center pt-20">
          <h1 className="flex justify-center text-black font-medium text-5xl">
            Shopping Cart
          </h1>
          <div className="flex items-center justify-center text-black pt-4 gap-6">
            <Link to="/" className="link">
              Home
            </Link>
            <img
              src={Arrow}
              alt=""
              className="flex justify-center -rotate-90 w-3"
            />
            <span className="link">Your Shopping Cart</span>
          </div>
        </div>

        <div className="pt-14 pr-8 pl-8">
          <div className="text-black font-medium text-lg flex justify-between">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Total</span>
          </div>

          {cartProducts.length > 0 ? (
            cartProducts.map((item) => (
              <div
                key={item.id}
                className="mt-[35px] flex justify-between items-center"
              >
                <div className="flex gap-x-[22px]">
                  <img src={item.img} alt={item.title} className="w-[120px]" />
                  <div>
                    <h3 className="text-black text-xl font-medium">
                      {item.title}
                    </h3>
                    <h4 className="text-gray-600">Color: Red</h4>
                    <button
                      onClick={() => removeProduct(item.id)}
                      className="text-red-600 underline mt-2 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <span className="text-black text-xl font-medium">
                  ${item.price}.00
                </span>

                <div className="flex items-center gap-4">
                  <button
                    className="text-2xl text-black"
                    onClick={handleModalDecrement}
                  >
                    -
                  </button>
                  <span className="text-2xl">{formatNumber(count)}</span>
                  <button
                    className="text-2xl text-black"
                    onClick={handleModalIncrement}
                  >
                    +
                  </button>
                </div>

                <span className="text-black text-xl font-medium">
                  ${fullPrice(item.price)}.00
                </span>
              </div>
            ))
          ) : (
            <p className="text-center text-xl text-gray-600 pt-10">
              Cart is empty!
            </p>
          )}

          <div className="grid justify-evenly">
            <div className="flex items-center text-3xl font-medium gap-2 pt-[120px]">
              <input
                type="checkbox"
                className="w-[24px] h-[24px]"
                checked={check}
                onChange={() => setCheck(!check)}
              />
              <div className="flex items-center gap-2">
                For <span className="text-black">$10.00</span> Please Wrap The
                Product
              </div>
            </div>

            <div className="flex items-center justify-between pt-14 text-2xl text-black font-medium">
              <span>Subtotal</span>
              <span>
                $
                {cartProducts.reduce(
                  (total, item) => total + item.price * count,
                  0,
                ) + (check ? 10 : 0)}
                .00
              </span>
            </div>

            <button
              onClick={() =>
                navigate("/checkout", {
                  state: {
                    cartProducts,
                    total:
                      cartProducts.reduce(
                        (total, item) => total + item.price * count,
                        0,
                      ) + (check ? 10 : 0),
                    wrap: check,
                  },
                })
              }
              className="w-full mt-4 bg-black text-xl text-white pt-4 pb-4 rounded-lg hover:opacity-80 duration-500"
            >
              Checkout
            </button>

            <Link
              to="/cart"
              className="flex items-center justify-center pt-4 text-xl text-black underline cursor-pointer hover:text-midNight duration-500 pb-4"
            >
              View Cart
            </Link>
          </div>
        </div>
      </section>

      <Subscribe />
    </div>
  );
}
