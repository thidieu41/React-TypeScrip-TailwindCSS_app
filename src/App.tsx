import "./App.css";
import HeaderComponent from "./Layout/Header";
import BannerCompoent from "./components/Banner";
import BestSellerComponent from "./components/BestSeller";
import CollectionComponent from "./components/Collection";
import ProductsComponent from "./components/Products";
import TestimonialComponent from "./components/Testimonial";

function App() {
  return (
    <div>
      <div className="bg-[#CFCFCF]">
        <div className="mx-24 pt-10">
          <HeaderComponent />
          <BannerCompoent />
        </div>
      </div>
      <div className="mx-24 pt-10">
        <CollectionComponent />
      </div>
      <div className="bg-[#CFCFCF]">
        <div className="mx-24 pt-10">
          <BestSellerComponent />
        </div>
      </div>
      <div className="mx-24 pt-10">
        <ProductsComponent />
      </div>
      <div className="bg-[#CFCFCF]">
        <div className="mx-24 pt-10">
          <TestimonialComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
