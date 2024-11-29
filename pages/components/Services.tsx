import { useState, useEffect } from "react";
import { Service, filters, services } from "../../data/servicesData";
import Modal from "./Layouts/Modal/Modal";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeFilter, setActiveFilter] = useState("scrap");

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Animation happens only once
    });
  }, []);

  // Filter the services based on the active filter
  const filteredServices = services.filter((service) => {
    // If 'all' is selected, return all services
    if (activeFilter === "all") return true;

    // Handle other specific filters
    if (activeFilter === "scrap")
      return service.title.toLowerCase().includes("scrap");
    if (activeFilter === "testing")
      return service.title.toLowerCase().includes("testing");
    if (activeFilter === "professional")
      return service.description.toLowerCase().includes("professional");
    if (activeFilter === "trading")
      return service.description.toLowerCase().includes("trading");

    return true; // If no specific filter is matched, return all services
  });

  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        WE DEAL IN
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Filter through our comprehensive range of services
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {filters
          .filter((filter) => filter.id !== "all") // Hide the "all" filter
          .map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full transition-all duration-1000 
                ${
                  activeFilter === filter.id
                    ? "border-2 border-blue-500 bg-blue-50 text-blue-700"
                    : "border-2 border-gray-200 hover:border-blue-300 text-gray-600"
                }`}
            >
              {filter.label}
            </button>
          ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {filteredServices.map((service, index) => (
          <div
            key={index}
            className={`h-[160px] px-4 cursor-pointer rounded-lg shadow-md
              bg-blue-500 
              hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out
              flex items-center justify-center border border-gray-100`}
            data-aos="zoom-in" // AOS animation for zoom-in
            onClick={() => setSelectedService(service)}
          >
            <h3 className="text-sm sm:text-base font-semibold text-white text-center">
              {service.title}
            </h3>
          </div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        imageSrc={selectedService?.image || ""}
        title={selectedService?.title || ""}
        description={selectedService?.description || ""}
      />
    </div>
  );
};

export default Services;
