import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">About AK Enterprises</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              AK Enterprises is a forward looking company focused on building an
              ambience that is needed for 21st century. Our company is focused
              to connect decision makers to dynamic network of data people and
              idea, so to deliver our best to our customers all over the world.
            </p>
          </div>

          {/* Features Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Features</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li>• Efficient physical delivery</li>
              <li>• Serve suppliers/clients as per their requirements</li>
              <li>• Expansion in capacity to meet the rising demands</li>
              <li>• The first point of contact for emerging manufactures</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Details</h3>
            <div className="text-gray-300 text-sm space-y-2">
              <p>Phone: +91 9660162221</p>
              <p>Email: enterprisesak773@gmail.com</p>
              <p className="leading-relaxed">
                902, Mondeal Square, Beside Sapath-5,
                <br />
                Prahlad Nagar, SG Highway,
                <br />
                Ahmedabad - 380015
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            AK Enterprises 2024. All Rights Reserved | Design by{" "}
            <span className="text-blue-400">
              <a
                href="https://aimintlabs.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Aimint Labs
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
