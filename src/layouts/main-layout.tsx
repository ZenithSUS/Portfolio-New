import { useState } from "react";
import { useNav } from "../context/navprovider";
import NavBar from "../components/navbar";
import Info from "../components/info";
import { Outlet } from "react-router-dom";
import Wrapper from "../components/wrapper";
import { motion } from "framer-motion";

const MainLayout = () => {
  const [animationDone, setAnimationDone] = useState(false);
  const { name } = useNav();

  return (
    <Wrapper>
      <motion.div
        initial={{ x: 500, y: 200 }}
        animate={{
          x: [0, 200, 200, -200, -200, 0],
          y: [0, 0, 200, 200, -50, 0],
        }}
        transition={{ duration: 10 }}
        onAnimationComplete={() => setAnimationDone(true)}
      >
        <Info animationDone={animationDone} />
      </motion.div>

      {animationDone && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5, ease: "easeInOut" }}
        >
          <div className="flex justify-center w-6xl max-w-full md:max-w-4xl p-5 bg-slate-950 rounded-2xl">
            <div className="flex flex-col w-full gap-5 overflow-y-hidden">
              <div className="flex flex-col gap-2 md:flex-row justify-between items-center w-full md:h-10">
                <h1 className="text-3xl font-bold border-b-3 border-blue-400">
                  {name}
                </h1>
                <NavBar />
              </div>
              <Outlet />
            </div>
          </div>
        </motion.div>
      )}
    </Wrapper>
  );
};

export default MainLayout;
