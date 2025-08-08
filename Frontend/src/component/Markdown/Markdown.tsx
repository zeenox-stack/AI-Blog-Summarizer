import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import DOMPurify from "dompurify"; 

import Cognition from '../../assets/psychology_24dp_D9D9D9_FILL0_wght400_GRAD0_opsz24.svg';

interface MarkdownProps {
  content: string; 
  hasStarted?: boolean;
}

const Markdown: React.FC<MarkdownProps> = ({ content, hasStarted = false }) => {
  if (content.length === 0 && !hasStarted) return <div className="p-2 rounded-3xl bg-gray-50 w-[95%] h-[92%] mb-4 ml-3 mt-2 text-gray-800 flex justify-center items-center flex-col"> 
    <span className="p-6 rounded-full bg-gray-200/50">
    <img src={Cognition} alt="coginition logo" className="h-6"/>
    </span>
    Your AI generated summary will appear here. 
     <span className="text-gray-300">Add content to get started</span>
  </div>
  return (
    <div className="p-2 rounded-3xl bg-gray-50 w-[95%] h-[12rem] mb-4 ml-3 mt-2 text-gray-800 prose md:prose-md max-w-none dark:prose-invert overflow-y-auto break-words">
      {content.length === 0 && hasStarted ? (
        <span className="w-full h-full bg-transparent flex justify-center items-center">Loading Content...</span>
      ) : (
        <ReactMarkdown
          children={DOMPurify.sanitize(content)}
          remarkPlugins={[remarkGfm]}
        />
      )}
    </div>
  );
};

export default Markdown;
