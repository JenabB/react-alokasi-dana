import React from "react";
import { Link } from "react-router-dom";
import welcome from "../assets/images/welcome.jpg";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <div>
      <div className="lg:w-1/4 w-full mx-auto">
        <img src={welcome} alt="welcome" />
      </div>

      <div className="p-4 pt-0 lg:w-1/4 mx-auto">
        <motion.h1
          className="text-3xl text-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.9,
              },
            },
          }}
        >
          Catat Pendanaan
        </motion.h1>
        <motion.p
          className="mt-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 1.4,
              },
            },
          }}
        >
          Catat alokasi pendanaanmu demi manajemen keuangan yang lebih baik.
        </motion.p>
        <motion.p
          className="text-sm mt-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 1.8,
              },
            },
          }}
        >
          Bukan seberapa banyak orang menghasilkan uang, melainkan untuk tujuan
          apa uang itu digunakan. <span>-John Ruskin</span>
        </motion.p>
      </div>
      <Link to="/home" className="floating-button bottom-10 fixed">
        <motion.div
          animate={{ x: 100 }}
          transition={{ ease: "easeOut", duration: 3 }}
          className="bg-green-600 px-6 py-2 rounded-xl text-white"
        >
          Mulai!
        </motion.div>
      </Link>
    </div>
  );
};

export default Welcome;
