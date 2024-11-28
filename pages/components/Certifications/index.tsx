import React from 'react';
import Image from 'next/image';

const Certifications = () => {
  const certificates = [
    '/image/certificate/certificate_2.jpeg',
    '/image/certificate/certificate_3.jpeg', 
    '/image/certificate/certificate_4.jpeg',
    '/image/certificate/certificate_5.jpeg'
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-10">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Our Certifications
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((cert, index) => (
            <div key={index} className="flex justify-center items-center">
              <Image
                src={cert}
                alt={`Certificate ${index + 1}`}
                width={150}
                height={150}
                className="rounded-full hover:scale-105 transition-transform duration-300 mix-blend-multiply"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
