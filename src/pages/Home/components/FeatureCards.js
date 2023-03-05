import React from "react";

export default function FeatureCards() {
  return (
    <div className="flex px-28  ">

      <div className="card w-3/12 px-4  flex flex-col justify-between">
        <i className="fa-solid fa-gift featureCardIcons  w-4/12"></i>
        <h2 className="  font-bold text-xl my-2">Free and Open-Source</h2>
        <p className=" my-4">
          Lorem Ipsum is simply dummy text of the printing and industry.
        </p>
        <p className=" py-4 font-semibold text-blue-600">Learn More</p>
      </div>


      <div className="card w-3/12 px-4 flex flex-col justify-between">
      <i className="fa-solid fa-up-down-left-right featureCardIcons w-4/12"></i>
        <h2 className="  font-bold text-xl my-2">Multipurpose Template</h2>
        <p className=" my-4">
          Lorem Ipsum is simply dummy text of the printing and industry.
        </p>
        <p className=" py-4 font-semibold text-blue-600 ">Learn More</p>
      </div>

      <div className="card w-3/12 px-4 flex flex-col justify-between "><i className="fa-solid fa-dice-four featureCardIcons w-4/12"></i>
      
        <h2 className="  font-bold text-xl my-2">High-quality Design</h2>
        <p className=" my-4">
          Lorem Ipsum is simply dummy text of the printing and industry.
        </p>
        <p className=" py-4 font-semibold text-blue-600">Learn More</p>
      </div>

      <div className=" card  w-3/12 px-4 flex flex-col justify-between ">
        <i className="fa-solid fa-database  featureCardIcons w-4/12"></i>
       
        <h2 className="  font-bold text-xl my-2">All Essential Elements</h2>
        <p className=" my-4">
          Lorem Ipsum is simply dummy text of the printing and industry.
        </p>
        <p className=" py-4  font-semibold text-blue-600">Learn More</p>
      </div>
    </div>
  );
}
