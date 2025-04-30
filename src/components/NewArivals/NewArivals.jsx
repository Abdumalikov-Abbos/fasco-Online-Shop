import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/products/productSlice";
import Stars from "../../Ui/Star";

const NewArrivals = () => {
  const dispatch = useDispatch();
  const { status, items } = useSelector((state) => state.products);

  const [selectedCategory, setSelectedCategory] = useState("Women’s Fashion");
  const [visibleProductsCount, setVisibleProductsCount] = useState(9);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error loading products.</div>;

  const filteredProducts =
    selectedCategory === "Women’s Fashion"
      ? items
      : items.filter((product) => product.category === selectedCategory);

  const visibleProducts = filteredProducts.slice(0, visibleProductsCount);

  const handleViewMore = () => {
    setVisibleProductsCount(visibleProductsCount + 9);
  };

  const handleHide = () => {
    setVisibleProductsCount(9);
    setIsExpanded(false);
  };

  const handleToggleView = () => {
    if (isExpanded) {
      handleHide();
    } else {
      setIsExpanded(true);
      handleViewMore();
    }

    if (status === "idle") {
      dispatch(fetchProducts());
    }
  };

  return (
    <div id="new-arrivals" className="mx-auto max-w-fasco-container px-4">
      <div className="arivals-content pt-[150px]">
        <div className="text-center">
          <h1 className="text-center font-[400] text-[46px] text-[#484848]">
            {selectedCategory === "All" ? "New Arrivals" : selectedCategory}
          </h1>
          <p className="mx-auto w-full sm:w-[500px] md:w-[614px] font-[400] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[26px] text-[#8A8A8A]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mt-[50px]">
          {[
            "Men’s Fashion",
            "Women’s Fashion",
            "Women Accessories",
            "Men Accessories",
            "Discount Deals",
          ].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 font-[400] text-[16px] leading-[100%] px-[48px] py-[20px] rounded-[10px]
                ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-[#FAFAFA] text-[#8A8A8A] hover:bg-[#F1F1F1]"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="mt-[50px]">
          <div className="w-full overflow-hidden">
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[40px]">
                {visibleProducts.length === 0 ? (
                  <div>No products available.</div>
                ) : (
                  visibleProducts.map((product) => (
                    <div
                      key={product.id}
                      className="w-[300px] md:w-[340px] lg:w-[386px] bg-[#FFFFFF] rounded-[10px] shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out p-4"
                    >
                      <img
                        src={product.img}
                        alt={product.title}
                        className="w-full h-auto object-cover mb-2 transition-transform duration-300"
                      />
                      <div className="flex justify-between items-start">
                        <h3 className="font-[500] text-[20px] text-[#484848]">
                          {product.title}
                        </h3>
                        <div className="mt-[3px]">
                          <Stars />
                        </div>
                      </div>
                      <p className="font-[500] text-[12px] text-[#8A8A8A] mt-[5px]">
                        {product.text}
                      </p>
                      <p className="font-[500] text-[14px] text-[#484848] mt-[10px]">
                        {product.reviews}
                      </p>
                      <div className="flex justify-between mt-[10px] items-center">
                        <p className="font-[500] text-[24px] text-[#484848]">
                          {product.price}
                        </p>
                        <p className="font-[400] text-[14px] text-[#FF4646]">
                          {product.sold}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* View More / Hide Button */}
        <div className="flex justify-center items-center mt-8 mb-[100px]">
          <button
            onClick={handleToggleView}
            className="px-6 py-2 bg-black text-white rounded-md transition-all duration-300 hover:bg-[#333]"
          >
            {isExpanded ? "Hide" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
