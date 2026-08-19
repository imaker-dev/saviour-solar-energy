"use client";

import { useState } from "react";
import { SITE_CONFIG } from "../const";

const WhatsAppButton = ({
  phoneNumber = SITE_CONFIG.contact.phone,
  message = "Hi! I'd like to know more about your services.",
  position = "bottom-right",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const positionClasses = position === "bottom-left" ? "left-6" : "right-6";

  const handleClick = () => {
    const cleanedNumber = phoneNumber.replace(/[^\d]/g, "");
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${cleanedNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-6 ${positionClasses} z-50 flex items-center rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-all duration-500 hover:bg-[#20BD5A] hover:shadow-xl`}
    >
      <img
        src="/Images/whatsapp.png"
        alt="WhatsApp Icon"
        className="h-6 w-6 shrink-0"
      />
      <span
        className={`overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-500 ${
          isHovered
            ? "max-w-[160px] ml-2 opacity-100"
            : "max-w-0 ml-0 opacity-0"
        }`}
      >
        Chat with us
      </span>
    </button>
  );
};

export default WhatsAppButton;
