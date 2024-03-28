const testimonialList = [
  {
    name: "Charles Smith",
    position: "CEO AMB co. ltd",
    url: "assets/images/avatar/1.jpeg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    tile: "The standard Lorem Ipsum passage, used since the 1500s",
  },
  {
    name: "Charles Smith",
    position: "CEO AMB co. ltd",
    url: "assets/images/avatar/2.jpeg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    tile: "The standard Lorem Ipsum passage, used since the 1500s",
  },
  {
    name: "Charles Smith",
    position: "CEO AMB co. ltd",
    url: "assets/images/avatar/3.jpeg",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    tile: "The standard Lorem Ipsum passage, used since the 1500s",
  },
];

const TestimonialComponent = () => {
  return (
    <div className="my-4">
      <p className="font-bold text-5xl text-center">What People Say About Us</p>
      <p className="font-medium text-sm text-center mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
      <div className="grid grid-cols-3  py-10 divide-x">
        {testimonialList.map((item, index) => (
          <div key={index} className="text-center p-8">
            <p className="font-bold leading-relaxed">{item.tile}</p>
            <p className="text-sm leading-relaxed mt-4">{item.content}</p>
            <div className="mt-10">
              <img
                src={item.url}
                alt="avatar"
                className="mt-2 w-[120px] h-[120px] object-cover m-auto rounded-[100px]"
              />
              <p className="mt-4 text-sm font-medium">{item.name}</p>
              <p className="text-base">{item.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialComponent;
