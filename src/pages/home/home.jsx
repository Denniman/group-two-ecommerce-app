import { useLocation } from "react-router-dom";
import { FooterComp } from "../../components/Footer";
import { Header } from "../../components/Header/Header";
import { ProductComp } from "../../components/Product Display/ProductComp";

export const Home = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  
  return (
    <div>
    <div className="w-screen min-h-screen">
      {/* Header */}
      <Header />
      {/* Main Store */}
      <ProductComp />
      <ProductComp />
    </div>
      <FooterComp />
    </div>
  );
};
