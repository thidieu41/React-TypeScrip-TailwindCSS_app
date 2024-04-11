import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const headerList = [
  { name: "PRODUCTS", url: "" },
  { name: "ABOUT US", url: "" },
  { name: "PARTNER", url: "" },
  { name: "CONTACT", url: "" },
];

const HeaderComponent = () => {
  const navigate = useNavigate();
  const handleNavigateToLogin = () => {
    navigate("/authen/login");
  };
  return (
    <div>
      <div className="flex justify-items-center justify-between items-center">
        <div>
          <img src={Logo} alt="logo" className="w-[140px] h-[50px]" />
        </div>
        <div className="gap-[20px] flex justify-items-center justify-center">
          {headerList.map((headerItem, index) => (
            <a className="font-bold" href={headerItem.url} key={index}>
              {headerItem.name}
            </a>
          ))}
        </div>
        <div>
          <button
            className="border-[1px] border-black border-solid rounded py-[5px] px-[20px] font-bold"
            onClick={handleNavigateToLogin}
          >
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
