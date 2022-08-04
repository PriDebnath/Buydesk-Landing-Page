import React from "react";

export default function FeatureCards() {
  return (
    <div className="flex px-28  ">
      <div className="card w-3/12 px-4">
        <i class="fa-solid fa-gift featureCardIcons"></i>
        <h2 className="  font-bold text-xl my-2">Free and Open-Source</h2>
        <p className="text-gray-500 my-4">
          Lorem Ipsum is simply dummy text of the printing and industry.
        </p>
        <p className="text-gray-500 py-4">Learn More</p>
      </div>
      <div className="card w-3/12 px-4">
      <i class="fa-solid fa-up-down-left-right featureCardIcons "></i>
        <h2 className="  font-bold text-xl my-2">Multipurpose Template</h2>
        <p className="text-gray-500 my-4">
          Lorem Ipsum is simply dummy text of the printing and industry.
        </p>
        <p className="text-gray-500 py-4">Learn More</p>
      </div>
      <div className="card w-3/12 px-4"><i class="fa-solid fa-dice-four featureCardIcons"></i>
      
        <h2 className="  font-bold text-xl my-2">High-quality Design</h2>
        <p className="text-gray-500 my-4">
          Lorem Ipsum is simply dummy text of the printing and industry.
        </p>
        <p className="text-gray-500 py-4">Learn More</p>
      </div>
      <div className=" card w-3/12 px-4 "><i class="fa-solid fa-database  featureCardIcons"></i>
       
        <h2 className="  font-bold text-xl my-2">All Essential Elements</h2>
        <p className="text-gray-500 my-4">
          Lorem Ipsum is simply dummy text of the printing and industry.
        </p>
        <p className="text-gray-500 py-4">Learn More</p>
      </div>
    </div>
  );
}
