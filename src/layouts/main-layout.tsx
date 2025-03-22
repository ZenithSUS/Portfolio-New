import NavBar from "../components/navbar";
import Info from "../components/info";
import { Outlet } from "react-router-dom";
import Wrapper from "../components/wrapper";

const MainLayout = () => {
  return (
    <Wrapper>
      <Info />
      <div className="flex justify-center w-6xl max-w-4xl p-5 bg-slate-950 rounded-2xl">
        <div className="flex flex-col w-full gap-5">
          <div className="flex justify-between items-center w-full h-10">
            <h1 className="text-3xl font-bold border-b-3 border-blue-400">
              Portfolio
            </h1>
            <NavBar />
          </div>
          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
};

export default MainLayout;
