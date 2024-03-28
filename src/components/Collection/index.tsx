import banner from "../../assets/images/banner.jpg";

const CollectionList = [
  {
    url: "",
  },
  {
    url: "",
  },
  {
    url: "",
  },
];

const fashionContent = [
  {
    number: "2024",
    content: "Lorem",
  },
  {
    number: "8900+",
    content: "Lorem",
  },
  {
    number: "3105+",
    content: "Lorem",
  },
];

const CollectionComponent = () => {
  return (
    <div className="mt-10">
      <p className="font-bold text-5xl text-center">New Collection</p>
      <p className="font-medium text-sm text-center mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
      <div className="flex m-auto justify-between gap-[60px] mt-14">
        {CollectionList.map((item) => (
          <div
            key={item.url}
            className=" h-[300px] w-full bg-[#CFCFCF] relative"
          >
            <button className="bg-white text-black w-[90%] absolute bottom-[20px] h-10 left-[5%] font-medium">
              COLLECTION
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 py-20 gap-[20px] mt-20 relative">
        <div className="flex justify-end">
          <img
            src={banner}
            alt="banner"
            className="rounded-tl-[100px] max-h-[480px] w-[65%]"
          />
        </div>
        <div className="max-w-[80%] mt-8">
          <p className="font-bold text-5xl leading-tight">
            Best Fashion <br />
            Since 2024
          </p>
          <p className="mt-6 text-sm leading-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="grid grid-cols-3 divide-x divide-slate-600 w-[40%] bg-[#797979] p-6 bottom-10 -ml-[80px] opacity-90 absolute">
            {fashionContent.map((content, index) => (
              <div key={index} className="text-center">
                <p className="font-extrabold text-xl">{content.number}</p>
                <p className="font-medium text-sm mt-2">{content.content}</p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default CollectionComponent;
