import React from "react";
import Man1 from "../../assets/image 228.png";
import Man2 from "../../assets/image 227.png";
import Group from "../../assets/images.png";
import Duet from "../../assets/images (1).png";
import Button from "../../Ui/Button";
import { Link } from "react-router-dom";
import Chanel from "../../assets/logo.png";
import LouisVuitton from "../../assets/logo (1).png";
import Prada from "../../assets/logo (2).png";
import CalvinKlein from "../../assets/logo (3).png";
import Denim from "../../assets/logo (4).png";
export default function Shop() {
  return (
    <>
      <div className="max-w-fasco-container mx-auto">
        <div className="pt-[94px] flex justify-between items-center gap-[20px]">
          <Link
            to="/shop"
            className="bg-[#E0E0E0] rounded-[10px] w-[392px] h-[790px] pt-[188px]"
          >
            <img src={Man1} alt="" />
          </Link>
          <div>
            <Link
              to="/shop"
              className="hover:opacity-85 inline-block rounded-[10px] duration-700  bg-[#E0E0E0] w-full h-full "
            >
              <img src={Group} alt="" />
            </Link>
            <div className="grid justify-center items-center">
              <h2 className=" text-7xl font-[500] text-[91px]  text-[#484848]">
                ULTIMATE
              </h2>
              <h1
                className="text-[180px] text-transparent font-[500]"
                style={{
                  WebkitTextStroke: "1px #484848",
                  WebkitTextFillColor: "transparent",
                }}
              >
                SALE
              </h1>
              <p className="flex justify-center text-lg pb-6">NEW COLLECTION</p>
              <Link to="/shop" className="flex justify-center pb-6">
                <Button title={"SHOP NOW"} />
              </Link>
            </div>
            <Link to="/shop" className="hover:opacity-85 duration-700 ">
              <img src={Duet} alt="" />
            </Link>
          </div>
          <Link
            Link
            to="/shop"
            className="bg-[#E0E0E0] w-[392px] rounded-[10px]  h-[790px] pt-[188px] flex justify-center"
          >
            <img src={Man2} alt="" />
          </Link>
        </div>
      </div>
      <div className="max-w-fasco-container mx-auto pb-[82px]">
        <ul className="pt-[82px]  flex justify-between items-center ">
          <li className="hover:opacity-85 duration-500">
            <img src={Chanel} alt="" />
          </li>
          <li className="hover:opacity-85 duration-500">
            <img src={LouisVuitton} alt="" />
          </li>
          <li className="hover:opacity-85 duration-500">
            <img src={Prada} alt="" />
          </li>
          <li className="hover:opacity-85 duration-500">
            <img src={CalvinKlein} alt="" />
          </li>
          <li className="pr-6 hover:opacity-85 duration-500">
            <img src={Denim} alt="" />
          </li>
        </ul>
      </div>
    </>
  );
}
