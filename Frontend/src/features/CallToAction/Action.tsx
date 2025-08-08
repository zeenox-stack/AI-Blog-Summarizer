import React from "react";
import { getExampleBlog } from "../../Utils/utils"; 

import Check from "../../assets/check.svg";

interface ActionType {
  set: (val: string) => void;
}

const Action: React.FC<ActionType> = React.memo(({ set }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[85%] py-6 rounded-3xl bg-gradient-to-r from-indigo-500 to-blue-500 flex flex-col items-center gap-y-6 px-3">
        <h2 className="text-white text-3xl font-sans font-normal text-center">
          Ready to Summarize Your First Blog?
        </h2>
        <p className="text-slate-200 font-[Poppins] w-3/5 text-center">
          Join thousands of content creatos, researchers, professionls who save
          hours everyday with AI-powered blog summarization
        </p>
        <div className="flex items-center justify-around gap-x-5 p-2">
          <button
            className="bg-white text-indigo-500 rounded-3xl px-3 py-2 hover:bg-gray-50"
            onClick={() => set(getExampleBlog())}
          >
            Try Example Blog
          </button>
          <span className="bg-transparent text-white flex justify-between items-center gap-x-2"> 
          <img src={Check} alt="Check icon" className="h4" />
            No sign-up required</span>
        </div>
      </div>
    </div>
  );
});

export default Action;
