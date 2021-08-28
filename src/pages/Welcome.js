import React from "react";
import { Link } from "react-router-dom";
import welcome from "../assets/images/welcome.jpg";
const Welcome = () => {
  return (
    <div>
      <div className="lg:w-1/4 w-full mx-auto">
        <img src={welcome} alt="welcome" />
      </div>

      <div className="p-4 lg:w-1/4 mx-auto">
        <h1 className="text-3xl text-center">Catat Pendanaan</h1>
        <p className="mt-4">
          Catat alokasi pendanaanmu demi manajemen keuangan yang lebih baik.
        </p>
        <p className="text-sm mt-4">
          Bukan seberapa banyak orang menghasilkan uang, melainkan untuk tujuan
          apa uang itu digunakan. <span>-John Ruskin</span>
        </p>
      </div>
      <Link to="/home" className="floating-button bottom-10 fixed">
        <button className="bg-green-600 px-6 py-2 rounded-xl text-white">
          Mulai!
        </button>
      </Link>
    </div>
  );
};

export default Welcome;
