import BestSellerComponent from "../components/BestSeller";
import CollectionComponent from "../components/Collection";
import ProductsComponent from "../components/Products";
import TestimonialComponent from "../components/Testimonial";
 const HomePage = () => {
  return (
    <>
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
    </>
  );
};

export default HomePage
