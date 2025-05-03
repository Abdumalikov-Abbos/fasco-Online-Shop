// import React from "react";
// import Man1 from "../../assets/image 228.png";
// import Man2 from "../../assets/image 227.png";
// import Group from "../../assets/images.png";
// import Duet from "../../assets/images (1).png";
// import Button from "../../Ui/Button";
// import { Link } from "react-router-dom";
// import Chanel from "../../assets/logo.png";
// import LouisVuitton from "../../assets/logo (1).png";
// import Prada from "../../assets/logo (2).png";
// import CalvinKlein from "../../assets/logo (3).png";
// import Denim from "../../assets/logo (4).png";

// export default function Shop() {
//   return (
//     <>
//       <div className="max-w-fasco-container mx-auto px-4 sm:px-6 lg:px-0">
//         <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-[94px] flex flex-col lg:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[20px]">
//           <Link
//             to="/shop"
//             className="bg-[#E0E0E0] rounded-[10px] w-full lg:w-[392px] h-auto lg:h-[790px] pt-12 sm:pt-16 md:pt-20 lg:pt-[188px] flex justify-center"
//           >
//             <img src={Man1} alt="" className="w-auto h-auto max-h-[400px] lg:max-h-none object-contain" />
//           </Link>
//           <div className="w-full lg:w-auto">
//             <Link
//               to="/shop"
//               className="hover:opacity-85 inline-block rounded-[10px] duration-700 bg-[#E0E0E0] w-full h-full"
//             >
//               <img src={Group} alt="" className="w-full h-auto" />
//             </Link>
//             <div className="grid justify-center items-center py-4 sm:py-6 md:py-8 lg:py-0">
//               <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[91px] font-[500] text-[#484848]">
//                 ULTIMATE
//               </h2>
//               <h1
//                 className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] xl:text-[180px] text-transparent font-[500]"
//                 style={{
//                   WebkitTextStroke: "1px #484848",
//                   WebkitTextFillColor: "transparent",
//                 }}
//               >
//                 SALE
//               </h1>
//               <p className="flex justify-center text-base sm:text-lg md:text-xl lg:text-lg pb-4 sm:pb-5 md:pb-6">NEW COLLECTION</p>
//               <Link to="/shop" className="flex justify-center pb-4 sm:pb-5 md:pb-6">
//                 <Button title={"SHOP NOW"} />
//               </Link>
//             </div>
//             <Link to="/shop" className="hover:opacity-85 duration-700 block">
//               <img src={Duet} alt="" className="w-full h-auto" />
//             </Link>
//           </div>
//           <Link
//             to="/shop"
//             className="bg-[#E0E0E0] w-full lg:w-[392px] rounded-[10px] h-auto lg:h-[790px] pt-12 sm:pt-16 md:pt-20 lg:pt-[188px] flex justify-center"
//           >
//             <img src={Man2} alt="" className="w-auto h-auto max-h-[400px] lg:max-h-none object-contain" />
//           </Link>
//         </div>
//       </div>
//       <div className="max-w-fasco-container mx-auto pb-8 sm:pb-12 md:pb-16 lg:pb-[82px] px-4 sm:px-6 lg:px-0">
//         <ul className="pt-8 sm:pt-12 md:pt-16 lg:pt-[82px] flex flex-wrap justify-center sm:justify-between items-center gap-4 sm:gap-6 md:gap-8 lg:gap-0">
//           <li className="hover:opacity-85 duration-500 px-2 sm:px-0">
//             <img src={Chanel} alt="" className="h-8 sm:h-10 md:h-12 lg:h-auto max-h-12" />
//           </li>
//           <li className="hover:opacity-85 duration-500 px-2 sm:px-0">
//             <img src={LouisVuitton} alt="" className="h-8 sm:h-10 md:h-12 lg:h-auto max-h-12" />
//           </li>
//           <li className="hover:opacity-85 duration-500 px-2 sm:px-0">
//             <img src={Prada} alt="" className="h-8 sm:h-10 md:h-12 lg:h-auto max-h-12" />
//           </li>
//           <li className="hover:opacity-85 duration-500 px-2 sm:px-0">
//             <img src={CalvinKlein} alt="" className="h-8 sm:h-10 md:h-12 lg:h-auto max-h-12" />
//           </li>
//           <li className="hover:opacity-85 duration-500 px-2 sm:px-0 pr-0 sm:pr-6">
//             <img src={Denim} alt="" className="h-8 sm:h-10 md:h-12 lg:h-auto max-h-12" />
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }








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
