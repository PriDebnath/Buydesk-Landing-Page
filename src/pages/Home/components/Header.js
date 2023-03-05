import React from "react";
import heroimage from "../../../assets/hero-image.jpg";

export default function Header() {
  return (
    <div className="bg-blue-600 text-white  text-center ">
      <h1 className="font-bold text-5xl px-16 m-0 pt-16 pb-8 ">
        Request for quotation to suppliers,
        <br /> negotiate and create recommendations
      </h1>
      <h2 className="text-xl ">
        Buydesk provides the buyers to manage RFQs, their suppliers <br />
        from a single portal to manage offers corresponding to various <br />
        RFQs{" "}
      </h2>
      <div className="iconContainer">
        <i className=" icons  fa-brands fa-bootstrap"></i>
        <i className="icons  fa-brands fa-react"></i>
        <i className="icons  fa-brands fa-bootstrap"></i>
        <i className="icons  fa-brands fa-react"></i>
      </div>{" "}
      <div className="w-8/12 m-auto">
        <img src={heroimage} alt="hero image" className=" w-full rounded-t-xl" />
      </div>
    </div>
  );
}
