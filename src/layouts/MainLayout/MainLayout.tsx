import { Outlet } from "react-router-dom";
import Heading from "@/shared/components/Heading";
import Header from "@/layouts/components/Header";
import MainContent from "@/layouts/components/MainContent";
import logo from "@/assets/logoA.svg";
import Image from "@/shared/components/Image";
import "./MainLayout.scss";

const MainLayout = (): React.ReactElement => {
  return (
    <div className="container">
      <Header>
        <Image
          width="31"
          height="34"
          src={logo}
          alt="Stolen logo from bonÀrea"
        />
        <Heading>Ejercicio sesión 8</Heading>
      </Header>
      <MainContent>
        <Outlet />
      </MainContent>
    </div>
  );
};

export default MainLayout;
