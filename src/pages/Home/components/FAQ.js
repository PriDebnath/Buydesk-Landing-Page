function FAQ() {
  return (
    <div className="text-center p-12 bg-gray-200">
      {" "}
      <div className="p-4 pb-4">
        <h2 className="text-2xl text-blue-600 px-20 font-semibold">FAQ</h2>
        <h1 className="text-5xl my-6 px-20 font-semibold">
          Any Questions? Answered
        </h1>
        <p className="text-gray-600 text-xl px-60 pb-4">
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </p>
      </div>

      <div className="px-28 grid sm:grid-cols-2">

        <div className="flex items-center bg-white p-2 mx-2 my-2 text-left font-bold rounded-lg ">
          <i className="block text-xl text-blue-600 bg-gray-200 py-2 px-3 m-2 rounded fa-solid fa-angle-down"></i>{" "}
          <div> How to use TailGrids?</div>
        </div>

        <div className="flex items-center bg-white p-2 mx-2 my-2   text-left font-bold rounded-lg  ">
          <i className="block text-xl text-blue-600 m-2 bg-gray-200 py-2 px-3  rounded fa-solid fa-angle-down"></i>{" "}
          <div> How to download icons from LineIcons?</div>
        </div>

        <div className="flex items-center bg-white p-2 mx-2 my-2  text-left font-bold rounded-lg">
          <i className="block text-xl text-blue-600 m-2 bg-gray-200 py-2 px-3  rounded fa-solid fa-angle-down"></i>{" "}
          <span> Is GrayGrids part of UIdeck?</span>
        </div>

        <div className="flex items-center bg-white p-2 mx-2 my-2 text-left font-bold rounded-lg">
          <i className="block text-xl text-blue-600 m-2 bg-gray-200 py-2 px-3  rounded fa-solid fa-angle-down"></i>{" "}
          <span> Can I use this template for commercial project?</span>
        </div>

        <div className="flex items-center bg-white p-2 mx-2 my-2 text-left font-bold rounded-lg">
          <i className="block text-xl text-blue-600 m-2 bg-gray-200 py-2 px-3  rounded fa-solid fa-angle-down"></i>{" "}
          <span> Do you have plan to releasing Play Pro?</span>
        </div>

        <div className="flex items-center bg-white p-2 mx-2 my-2 text-left font-bold rounded-lg">
          <i className="block text-xl text-blue-600 m-2 bg-gray-200 py-2 px-3  rounded fa-solid fa-angle-down"></i>{" "}
          <span> Where and how to host this template?</span>
        </div>
      </div>
    </div>
  );
}
export default FAQ;
