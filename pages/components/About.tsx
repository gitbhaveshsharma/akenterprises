import React from "react";
import Marquee from "./Marquee";
import Image from "next/image";

const About = () => {
  return (
    <div className="py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">About Us</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          AK Enterprises is a forward-thinking company dedicated to creating the
          ideal environment for the 21st century. We specialize in connecting
          decision-makers to a dynamic network of data, people, and ideas,
          ensuring that we deliver the best solutions to our customers
          worldwide. With expertise in education, government projects,
          government tenders, metals, and finance, our goal is to drive
          comprehensive growth and development that enhances the success of our
          clients.
        </p>
      </div>

      {/* New Section */}
      <div className="px-20 ">
        <div className="mt-16 p-8 md:p-12 rounded-2xl shadow-lg bg-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left Box */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Quality and Efficiency Drive Us
              </h3>
              <p className="text-gray-600 mb-4">
                <strong>Quality is our top priority.</strong> <br />
                We prioritize quality above all else, ensuring that we deliver
                cost-effective, high-quality metals by sourcing and distributing
                durable products with long-lasting performance. Our established
                track record in the metal trading industry speaks to our
                unwavering commitment to excellence.
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Efficiency drives our growth.</strong> <br />
                We continuously seek opportunities to acquire valuable resource
                assets, enhancing our operational efficiency and effectiveness.
                This approach has strengthened our position in the regional
                market, enabling us to create greater value for our customers.
              </p>
              <p className="text-gray-600">
                <strong>Looking towards the global market.</strong> <br />
                While expanding our presence in the domestic market, we are also
                focused on making a significant impact in the international
                metal trading sector. Moving forward, we aim to increase our
                business volume and diversify into new products, ensuring
                sustained growth and global reach.
              </p>
            </div>
            {/* Right Box */}
            <div className="flex-1 relative w-full h-80 md:h-[400px]">
              <Image
                src="/image/banner-1.jpeg"
                alt="About Us"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Marquee />
      </div>
    </div>
  );
};

export default About;
