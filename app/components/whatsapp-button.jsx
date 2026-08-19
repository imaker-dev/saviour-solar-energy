"use client";

import { useState } from "react";
import { SITE_CONFIG } from "../const";

const WhatsAppButton = ({
  phoneNumber = SITE_CONFIG.contact.phone,
  message = "Hi! I'd like to know more about your services.",
  position = "bottom-right",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const positionClasses =
    position === "bottom-left" ? "left-6" : "right-6";

  const handleClick = () => {
    const cleanedNumber = phoneNumber.replace(/[^\d]/g, "");
    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${cleanedNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div
      className={`fixed bottom-6 ${positionClasses} z-50 h-14 w-14`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={handleClick}
        aria-label="Chat on WhatsApp"
        className={`absolute bottom-0 flex h-14 items-center overflow-hidden rounded-full bg-[#25D366] text-white shadow-lg transition-[width] duration-300 ease-out hover:bg-[#20BD5A] hover:shadow-xl ${
          position === "bottom-left"
            ? "left-0"
            : "right-0"
        } ${
          isHovered
            ? "w-[150px] px-4"
            : "w-14 justify-center px-0"
        }`}
      >
        <img
          src="/Images/whatsapp.png"
          alt="WhatsApp Icon"
          className="h-7 w-7 shrink-0"
        />

        <span
          className={`whitespace-nowrap text-sm font-medium transition-all duration-300 ${
            isHovered
              ? "ml-2 max-w-[160px] opacity-100"
              : "ml-0 max-w-0 opacity-0"
          }`}
        >
          Chat with us
        </span>
      </button>
    </div>
  );
};

export default WhatsAppButton;