import { useState, useEffect } from "react";
import Image from "next/image";
import { projects } from "../../../data/projectsData"; // Import data
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface ProjectData {
  heading: string;
  caption: string;
  images: string[];
  modalData: {
    product: string;
    labReports: string[];
    totalQuantity: string;
    locations: string;
    ministry: string;
    projectType: string;
    prices: {
      market: string;
      lme: string;
    } | null; // Allow prices to be null
    projectReports: string[];
  };
}

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleProjectClick = (project: ProjectData) => {
    setSelectedProject(project);
    setIsOpen(true); // Open modal
  };

  const handleClose = () => {
    setTimeout(() => {
      setSelectedProject(null);
      setIsOpen(false); // Close modal after animation
    }, 300); // Animation duration
  };

  return (
    <div className="container mx-auto p-4 flex flex-wrap justify-center gap-4 ">
      {projects.map((project: ProjectData, index: number) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center w-80 transition-transform duration-300 hover:scale-105"
          onClick={() => handleProjectClick(project)}
        >
          <Slider images={project.images} />
          <div className="mt-2 w-full text-center p-2">
            <h2 className="text-lg font-bold p-2">{project.heading}</h2>
            <p className="text-gray-600 text-sm p-2">{project.caption}</p>
          </div>
        </div>
      ))}

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />
          <div
            className={`relative bg-white rounded-lg p-4 sm:p-8 w-[90%] max-w-2xl m-4 transition-transform duration-300 ${
              isOpen
                ? "scale-100 opacity-100 animate-modal-scale-up"
                : "scale-95 opacity-0 animate-fade-in"
            }`}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleClose}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">
              {selectedProject.heading}
            </h2>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1.25rem", // h3 equivalent
                        textAlign: "center",
                      }}
                    >
                      Field
                    </TableCell>
                    <TableCell
                      style={{
                        backgroundColor: "blue",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1.25rem", // h3 equivalent
                        textAlign: "center",
                      }}
                    >
                      Details
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className="bg-[#4f60ff]">
                    <TableCell style={{ color: "white", fontWeight: "bold" }}>
                      Product
                    </TableCell>
                    <TableCell style={{ color: "white" }}>
                      {selectedProject.modalData?.product || "N/A"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-[#4f60ff]">
                    <TableCell style={{ color: "white", fontWeight: "bold" }}>
                      Lab Reports
                    </TableCell>
                    <TableCell style={{ color: "white" }}>
                      {selectedProject.modalData?.labReports?.join(", ") ||
                        "N/A"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-[#4f60ff]">
                    <TableCell style={{ color: "white", fontWeight: "bold" }}>
                      Total Quantity
                    </TableCell>
                    <TableCell style={{ color: "white" }}>
                      {selectedProject.modalData?.totalQuantity || "N/A"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-[#4f60ff]">
                    <TableCell style={{ color: "white", fontWeight: "bold" }}>
                      Locations
                    </TableCell>
                    <TableCell style={{ color: "white" }}>
                      {selectedProject.modalData?.locations || "N/A"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-[#4f60ff]">
                    <TableCell style={{ color: "white", fontWeight: "bold" }}>
                      Ministry/Department
                    </TableCell>
                    <TableCell style={{ color: "white" }}>
                      {selectedProject.modalData?.ministry || "N/A"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-[#4f60ff]">
                    <TableCell style={{ color: "white", fontWeight: "bold" }}>
                      Project Type
                    </TableCell>
                    <TableCell style={{ color: "white" }}>
                      {selectedProject.modalData?.projectType || "N/A"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-[#4f60ff]">
                    <TableCell style={{ color: "white", fontWeight: "bold" }}>
                      Prices
                    </TableCell>
                    <TableCell style={{ color: "white" }}>
                      Market -{" "}
                      {selectedProject.modalData?.prices?.market || "N/A"}, LME
                      - {selectedProject.modalData?.prices?.lme || "N/A"}
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-[#4f60ff]">
                    <TableCell style={{ color: "white", fontWeight: "bold" }}>
                      Reports
                    </TableCell>
                    <TableCell style={{ color: "white" }}>
                      {selectedProject.modalData?.projectReports?.join(", ") ||
                        "N/A"}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      )}
    </div>
  );
};

const Slider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Slide changes every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[180px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform: `translateX(${(index - currentIndex) * 100}%)`,
            transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
          }}
        >
          <Image
            src={image}
            alt={`Slide ${index}`}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Project;
