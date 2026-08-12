import React from "react";
import { motion } from "framer-motion";
import { Login } from "../Login/Login";

export const LoginPage = () => {
  return (
    <div className="loginpage">
      <Login />
      <div className="w-full px-9 bg-black">
        <div className="w-full pt-5 2xl:w-[1366px] m-auto">
          <motion.div
            className="h-[1px] w-full bg-white m-auto"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: 0.3, ease: "linear", duration: 0.8 }}
          ></motion.div>
          <motion.div
            className="flex flex-col lg:flex-row justify-between py-[31px]"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, ease: "linear", duration: 0.2 }}
          >
            <h6 className="text-[12px] r text-[#777E90]">
              Copyright © 2024 amoha.ai
            </h6>
            <h6 className="text-[12px]">Privacy Policy</h6>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
