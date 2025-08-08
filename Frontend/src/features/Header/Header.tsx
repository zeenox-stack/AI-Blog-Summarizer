import React from "react";

const Header: React.FC = React.memo(() => {
  return (
    <section className="w-full h-16 flex justify-between items-center bg-white p-5">
      <div>
        <img src="some logo" alt="" />
        <div className="flex flex-col items-start">
          <h1 className="text-lg">Summarizer</h1>
          <span className="text-gray-300 text-sm">
            AI-Powered Blog Intelligence
          </span>
        </div>
      </div>
      <div>
        <span className="rounded-3xl px-3 py-1 w-6 bg-green-100 text-green-600 text-sm md:text-base break-inside-auto">
          Free & Open
        </span>
      </div>
    </section>
  );
});

export default Header;
