import React from "react";

import GhIcon from "../../assets/gh-icon.svg";
import GhIconHover from "../../assets/gh-icon-hover.svg";

const Footer: React.FC = React.memo(() => {
  return (
    <div className="p-6 bg-white/50 w-full h-8 flex justify-start items-center gap-x-2 border-t border-slate-200/50">
      <span className="font-[Poppins] text-gray-800">
        © 2025 Blog Summarizer. Open source & free.
      </span>
      <button
        className="bg-white hover:bg-gray-800 rounded-full p-1 group flex justify-center items-center"
        onClick={() =>
          (window.location.href = import.meta.env.VITE_REPO_URL)
        }
      >
        <img
          src={GhIcon}
          alt="github icon"
          className="block group-hover:hidden h-6"
        />
        <img
          src={GhIconHover}
          alt="github icon hover"
          className="hidden group-hover:block h-6"
        />
      </button>
    </div>
  );
});

export default Footer;
