import { FC, ReactNode } from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./Header";
import BannerCompoent from "../components/Banner";
import FooterComponent from "./Footer";

interface BaseLayoutProps {
  children?: ReactNode;
}

const PageLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        flex: 1,
        height: "100%",
      }}
    >
      <div>
        <div className="bg-[#CFCFCF]">
          <div className="mx-24 pt-10">
            <HeaderComponent />
            <BannerCompoent />
          </div>
        </div>
        {children || <Outlet />}
        <div className="mx-24 py-10">
          <FooterComponent />
        </div>
      </div>
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node,
};

export default PageLayout;
