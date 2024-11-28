import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Layouts/Button";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/image/banner-3.jpeg",
    "/image/banner-4.jpeg", 
    "/image/banner-5.jpg",
    "/image/banner-6.jpg",
  ];

  const quote = {
    text: "Transforming scrap into value, one piece at a time.",
    caption: "Where sustainability meets profitability",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const contactTop = contactSection.getBoundingClientRect().top;
        if (contactTop > window.innerHeight || contactTop < 0) {
          history.replaceState(null, "", window.location.pathname);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [images.length]); // Added images.length as a dependency

  const handleContactClick = () => {
    window.location.hash = "#contact";
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={image}
            alt={`Banner ${index + 3}`}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
            onError={(e) => {
              e.currentTarget.src = "/image/default-banner.jpg"; // Fallback image
            }}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="h-full flex flex-col items-center justify-center px-4 -mt-16">
          <div className="text-center mb-8 animate-[fadeIn_1s] w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[65%] mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {quote.text}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 italic">
              {quote.caption}
            </p>
          </div>

          <Button
            onClick={handleContactClick}
            className="animate-[fadeIn_1s]"
            name="Contact Us"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
