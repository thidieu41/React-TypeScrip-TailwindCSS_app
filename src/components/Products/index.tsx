import { useState } from "react";
import RatingElement from "../../GeneralComponents/Rating";
import { categories, products } from "./data";

const ProductsComponent = () => {
  const [selectCategory, setSelectCategory] = useState(
    "89463440-8bc8-44c7-8d9a-7b6e3443d03d"
  );
  const handleSetCaegory = (newValue: string) => {
    setSelectCategory(newValue);
  };
  return (
    <div className="my-10 pb-20">
      <p className="font-bold text-5xl text-center">Our Products</p>
      {/* <p className="font-medium text-sm text-center mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p> */}

      <ul className="flex justify-center gap-10 mt-2">
        {categories.map((item) => (
          <li
            className={`cursor-pointer space-x-2 px-2 pt-5 pb-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110  ${
              item.id === selectCategory
                ? "font-bold border-b-2 border-[#CFCFCF] text-[#CFCFCF]"
                : ""
            }`}
            onClick={() => handleSetCaegory(item.id)}
          >
            {item.name}
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <div className=" grid grid-cols-4 gap-10 justify-center">
          {products
            .filter((data) => data.categoryId === selectCategory)
            .map((item, index) => (
              <div key={index}>
                <img src={item.url} alt="products" className="h-[400px]" />
                <div className="bg-white mt-4">
                  <p className="mt-2 text-base">{item.name}</p>
                  <div className="flex gap-[30px] mt-2">
                    <p className="text-red-500 line-through">
                      {item.oldPrice} $
                    </p>
                    <p className="font-bold">{item.newPrice} $</p>
                  </div>
                  <div className="flex justify-end mr-6">
                    <RatingElement ratingValue={item.rate} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsComponent;
