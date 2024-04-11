import RatingElement from "../../GeneralComponents/Rating";
import product1 from "../../assets/images/product1.jpeg";
import product2 from "../../assets/images/products2.jpeg";

const products = [
  {
    name: "No 1 Product",
    url: product1,
    oldPrice: "20",
    newPrice: "15",
    rate: 4,
  },
  {
    name: "No 2 Product",
    url: product2,
    oldPrice: "20",
    newPrice: "15",
    rate: 2,
  },
];

const BestSellerComponent = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-[50px]">
      <div>
        <p className="font-bold text-5xl leading-tight">
          Best Seller <br /> Products
        </p>
        <p className="mt-6 text-sm leading-7">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <button className="border-[1px] border-black border-solid py-[5px] px-[20px] bg-black text-white max-w-[200px] mt-6">
          SEE NOW
        </button>
      </div>
      <div className="col-span-2">
        <div className="flex gap-10 justify-center">
          {products.map((item, index) => (
            <div key={index}>
              <img src={item.url} alt="product" className="w-[320px] h-[65%]" />
              <div className="bg-white p-4">
                <RatingElement ratingValue={item.rate} />
                <p className="font-medium mt-2">{item.name}</p>
                <div className="flex gap-[10px] justify-end">
                  <p className="text-red-500 line-through">{item.oldPrice} $</p>
                  <p className="font-bold">{item.newPrice} $</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellerComponent;
