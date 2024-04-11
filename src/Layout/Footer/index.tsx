const footerMenu = [
  { name: "External Content 1", url: "" },
  { name: "External Content 2", url: "" },
  { name: "External Content 3", url: "" },
  { name: "External Content 4", url: "" },
  { name: "External Content 5", url: "" },
  { name: "External Content 6", url: "" },
  { name: "External Content 7", url: "" },
  { name: "External Content 8", url: "" },
  { name: "External Content 9", url: "" },
  { name: "External Content 0", url: "" },
  { name: "External Content 1", url: "" },
  { name: "External Content 1", url: "" },
];

const IconList = [
  {
    name: "Email",
    content: "theresa@gmail.com",
    url: "https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454731_640.png",
  },
  {
    name: "Skype",
    content: "theresa.skype.vn",
    url: 'https://static-00.iconduck.com/assets.00/skype-icon-2048x2048-i1tcgitm.png',
  },
  {
    name: "Phone",
    content: "+12534238",
    url: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Phone_icon.png",
  },
];
const FooterComponent = () => {
  return (
    <div>
      <div className="grid grid-cols-3">
        <div className="m-auto">
          <p className="font-bold">THERESA</p>
          <p className="text-sm italic leading-loose mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="col-span-2 w-full m-auto ">
          <div className="grid grid-cols-3 gap-4 text-end ">
            {footerMenu.map((item, index) => (
              <p className="text-sm" key={index}>
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </div>
      <hr className="my-7" />
      <div className="flex justify-center gap-10">
        {IconList.map((icon, index) => (
          <div className="flex gap-2 items-center" key={index}>
            <img className="w-[25px] h-[25px]" src={icon.url} alt={icon.name} /> <span>{icon.content}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterComponent;
