import React from "react";
import Image from "next/image";
import Button from "../Layouts/Button";
import { ConnectWithoutContact } from "@mui/icons-material"; // Importing the connect icon from Material UI

const JoinUs: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[80vh]">
      <div className="absolute inset-0">
        <Image
          src="/image/connect.png"
          alt="Join Us Background"
          layout="fill"
          objectFit="cover"
          className="bg-cover bg-center"
        />
      </div>
      <div className="p-8 rounded-lg text-center relative z-10 w-full max-w-[80%] bg-gray-800 bg-opacity-70">
        <ConnectWithoutContact
          className="inline-block mr-2 mb-5 text-white"
          style={{ fontSize: "100px" }}
        />
        <h2 className="text-4xl font-bold mb-8 text-white">Join Our Team</h2>
        <p className="text-gray-200 mb-6">
          “Hello! We are excited to invite you to be part of our dynamic team.
          As we navigate the evolving landscape of metal trading, we are
          committed to innovation and growth. Join us on this thrilling journey,
          and let&apos;s achieve great things together!”
        </p>

        <Button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="animate-[fadeIn_1s]"
          name="Join Us"
        />
      </div>
    </div>
  );
};

export default JoinUs;
