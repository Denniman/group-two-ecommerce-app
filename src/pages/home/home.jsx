import { Button } from "flowbite-react";
import { useLocation } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { FooterComp } from "../../components/Footer";

export const Home = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div>

    <div className="w-screen min-h-screen">
      {/* Header */}
      <div className="w-full flex justify-between py-4 px-12 lg:px-24 border-b-2 border-gray-200">
        <div className=" text-xl font-bold ">
          <p>{"Business Name"}</p>
        </div>
        <div className="flex gap-4">
          <Button color="light">
            <IoCartOutline className="h-4 w-4 mr-2 mt-0.5" /> Cart
          </Button>
        </div>
      </div>
      {/* Main Store */}
      <div className="py-8 px-12 lg:px-24">Home {pathname}</div>
      <div className="flex w-full gap-12 items-center justify-center mt-4">
        {/* left side */}
        <div>
          <img
            src={
              "https://techcrunch.com/wp-content/uploads/2022/06/CMC_1384.jpg?w=1390&crop=1"
            }
            alt="product image"
            className="w-64 h-64 md:w-96 md:h-96 rounded"
          />
        </div>
        {/* right side */}
        <div className="flex flex-col gap-4">
          <p id="productName" className="font-bold text-2xl">
            {'Apple MacBook Pro 17"'}
          </p>
          <p id="price" className="font-semibold text-xl">
            NGN {"2,250,000.00"}
          </p>
          <div className="flex items-center gap-2">
            <p className="text-slate-700">Quantity:</p>
            <input type="number" className="w-16" />
          </div>
          <Button className="w-full" color="dark">
            <HiPlus className="mr-2 h-4 w-4 mt-0.5" /> Add to Cart
          </Button>
          <p id="description" className="text-sm text-slate-700">
            {"Brand new, limited time offer"}
          </p>
        </div>
      </div>
    </div>
      <FooterComp />
    </div>
  );
};
