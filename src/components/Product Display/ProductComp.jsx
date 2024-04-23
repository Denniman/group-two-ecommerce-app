import { Button } from "flowbite-react";
import { HiPlus } from "react-icons/hi";
import { QuantityBtn } from "../Buttons";

export const ProductComp = () => {
  return (
    <div className="p-4">
      <div className="sm:py-8 sm:px-12 lg:px-24">
        {"HOME / APPLE MACBOOK PRO"}
      </div>
      <div className="sm:flex w-full gap-12 items-center justify-center mt-4">
        {/* left side */}
        <div>
          <img
            src={
              "https://techcrunch.com/wp-content/uploads/2022/06/CMC_1384.jpg?w=1390&crop=1"
            }
            alt="product image"
            className="w-full basis-1/2 min-h-64 md:w-96 md:h-96 rounded mb-2"
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
            <QuantityBtn />
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
  );
};
