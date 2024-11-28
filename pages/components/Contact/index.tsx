import React, { useState } from "react";
import Button from "../Layouts/Button";
import Input from "../Layouts/Input";
import Textarea from "../Layouts/Textarea";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 w-full max-w-2xl mx-auto mb-10">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col md:flex-row mb-4 space-y-4 md:space-y-0 md:space-x-4">
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            isActive={!!name}
            className="h-16 w-full md:w-[70%] lg:w-[100%]"
          />
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            isActive={!!email}
            className="h-16 w-full md:w-[100%] lg:w-[100%]"
          />
        </div>
        <div className="mb-4">
          <Textarea
            id="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={10}
            className="w-full h-32 md:h-40"
            required
            isActive={!!message} // Added isActive prop
          />
        </div>
        <Button
          name="Send Message"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
        />
      </form>
    </div>
  );
};

export default Contact;
