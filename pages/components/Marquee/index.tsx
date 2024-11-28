import React from "react";

const Marquee = () => {
  const items = [
    "Brass",
    "Aluminium", 
    "Copper",
    "Rice", 
    "Scraps",
    "Government contracts",
    "Precious and non precious metals",
    "Antiques",
    "Education",
    "Commodities (Hard and Soft)",
    "International properties",
    "Finance and Banking",
    "Project and Legal consultancy with settlements",
    "Supply",
    "Energy and Agricultural projects",
    "Stock Exchange",
  ];

  return (
    <div className="relative w-full h-[150px] overflow-hidden py-3 ">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 w-[100px] h-full bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-[100px] h-full bg-gradient-to-l from-white to-transparent z-10"></div>

      <div className="flex animate-[marquee_30s_linear_infinite] whitespace-normal cursor-pointer">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-4 p-4 min-h-[100px] min-w-[200px] max-w-[300px] bg-white shadow-lg rounded-full border-4 border-gray-300 flex items-center justify-center hover:scale-105 transition-transform duration-300"
            style={{ width: "fit-content" }}
          >
            <span className="text-gray-800 text-center font-bold text-md ">
              <h4 className="text-lg font-bold">{item}</h4>
            </span>
          </div>
        ))}
        {items.map((item, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex-shrink-0 mx-4 p-4 min-h-[100px] min-w-[200px] max-w-[300px] bg-white shadow-lg rounded-full border-4 border-gray-300 flex items-center justify-center hover:scale-105 transition-transform duration-300"
            style={{ width: "fit-content" }}
          >
            <span className="text-gray-800 text-center font-bold text-md ">
              <h4 className="text-lg font-bold">{item}</h4>
            </span>
          </div>
        ))}
      </div>

      {/* TailwindCSS for the smooth marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
