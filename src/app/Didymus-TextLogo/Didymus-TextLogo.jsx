import React, { forwardRef } from "react";

const DidymusLogo = forwardRef(
  (
    { className = "", size = "md", ariaLabel = "Didymus website logo" },
    ref
  ) => {
    const sizeMap = {
      sm: "text-lg",
      md: "text-2xl",
      lg: "text-4xl",
    };

    const textSize = sizeMap[size] || sizeMap.md;

    return (
      <div
        ref={ref}
        className={`inline-flex items-center gap-3 transition duration-300 hover:brightness-125 hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.7)] ${className}`}
        role="img"
        aria-label={ariaLabel}
        title="Didymus"
      >
        {/* White cross icon */}
        <svg
          aria-hidden="true"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          <rect
            x="0.5"
            y="0.5"
            width="23"
            height="23"
            rx="6"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M12 7v10M8 12h8"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* White text with smooth hover glow */}
        <span className={`${textSize} text-white`}>Didymus</span>
      </div>
    );
  }
);

DidymusLogo.displayName = "DidymusLogo";

export default DidymusLogo;
