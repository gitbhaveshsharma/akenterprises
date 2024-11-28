import Image from "next/image";
import React from "react";

const BusinessOverview: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 md:px-16 lg:px-24">
      {/* Box */}
      <div className="flex flex-col items-center p-6 md:p-8 text-gray-800 overflow-hidden">
        <Image
          src="/image/Director_and_Founder.jpg"
          alt="Director and Founder Image"
          width={200} // Increased image width to 200px
          height={200} // Increased image height to 200px
          className="rounded-lg mb-4"
        />
        <h4 className="text-xl font-semibold text-gray-800 text-center mb-10">
          Apurv Khanna <br />
          <strong>(Director and Founder)</strong>
        </h4>
        <p className="text-lg text-center text-gray-600 max-w-4xl mx-auto">
          We have come a long way. Dealing in Aluminium scrap tender of Gujarat
          Government presently and copper and transformer scrap, we are further
          looking for expanding our business. Managing skills and passion, we
          are constantly looking to open new frontiers for our company. Our
          mission is to establish a strong and dedicated team to pursue the main
          objectives of the company and pave the way toward successful
          establishment.
        </p>
      </div>
    </div>
  );
};

export default BusinessOverview;
