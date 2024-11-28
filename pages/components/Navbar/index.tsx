import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Adjust detection point

      let mostVisibleSection = "home"; // Default to home
      let maxVisibility = 0;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;

          // Calculate overlap of viewport with section
          const sectionTop = offsetTop;
          const sectionBottom = offsetTop + offsetHeight;
          const viewportTop = scrollPosition - window.innerHeight / 2;
          const viewportBottom = scrollPosition + window.innerHeight / 2;

          // Calculate section visibility
          const visibleTop = Math.max(sectionTop, viewportTop);
          const visibleBottom = Math.min(sectionBottom, viewportBottom);
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);

          // Track the most visible section
          const visibility = visibleHeight / offsetHeight;
          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            mostVisibleSection = section;
          }
        }
      });

      // Ensure 'contact' section is considered active if it's the last section and the viewport is at the bottom
      if (sections[sections.length - 1] === "contact" && window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        mostVisibleSection = "contact";
      }

      setActiveSection(mostVisibleSection);
    };

    // Initial call to set correct section
    handleScroll();

    // Add scroll and resize listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Company Name */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="/Brand-logo.svg"
                alt="Company Logo"
                width={48}
                height={48}
              />
            </div>
            <div className="ml-2 font-bold text-xl text-gray-800">
              AK Enterprises
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "services", "portfolio", "contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className={`text-gray-700 hover:text-gray-900 relative group no-underline ${
                    activeSection === item ? "text-blue-600" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(item)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {item.toUpperCase()}
                  <span
                    className={`absolute bottom-[-4px] left-0 w-0 h-[3px] bg-blue-600 transition-all duration-300 group-hover:w-full ${
                      activeSection === item ? "w-full" : ""
                    }`}
                  ></span>
                </Link>
              )
            )}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 transition duration-300"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {["home", "about", "services", "portfolio", "contact"].map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className={`block px-3 py-2 text-gray-700 hover:text-gray-900 relative group no-underline ${
                activeSection === item ? "text-blue-600" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(item)
                  ?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
            >
              {item.toUpperCase()}
              <span
                className={`absolute bottom-0 left-3 w-0 h-[3px] bg-blue-600 transition-all duration-300 group-hover:w-[calc(100%-24px)] ${
                  activeSection === item ? "w-[calc(100%-24px)]" : ""
                }`}
              ></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
