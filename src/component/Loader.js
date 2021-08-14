import React from "react";

const Loader = () => {
  return (
    <div className="loader">
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin h-20 w-20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
