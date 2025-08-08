import React from "react";
import Modal from "../../component/Modal/Modal";
import { handleSummarizeContent, handleURLParsing } from "../../Services/api"; 

import Editor from "../../assets/editor.svg";
import { getLimitedInput, useAppContext } from "../../Utils/utils";
import { AppContext, type InputType } from "../../App";

interface InputProps {
  setContent: (val: string, isText?: boolean) => void;
  setStart: (val: boolean) => void;
}

const Input: React.FC<InputProps> = React.memo(({ setContent, setStart }) => {
  const { inputState, setInputState, idx } = useAppContext(AppContext);

  return (
    <Modal
      heading="Input Content"
      logo={{
        src: Editor, 
        alt: "Editor logo", 
        props: "bg-purple-200"
      }}
      utilButtons={[]}
      bottomUtils={[
        [
          <button
            className="rounded-3xl py-2 px-5 text-white bg-blue-400 flex-grow"
            onClick={() => {
              setStart(true);
              handleSummarizeContent(inputState.content, (val: string) => {
                setContent(val);
                setStart(false);  
              }, idx - 1);
            }}
            disabled={inputState.content.length === 0}
          >
            Generate Summary
          </button>,
          <span>{inputState.content.length} / 50000</span>,
        ],
        [
          <button
            className="rounded-3xl py-2 px-5 text-white bg-blue-400 hover:bg-gradient-to-br hover:from-indigo-400 hover:to-blue-400"
            onClick={() => {
              setStart(true);
              handleURLParsing(inputState.urlContent, (val: string) => {
                setContent(val, false);
                setStart(false);
              }, idx - 1);
            }}
            disabled={inputState.urlContent.length < 1}
          >
            Generate Summary from URL
          </button>,
        ],
      ]}
      tabs={[
        {
          tab: "Text",
          node: (
            <textarea
              className="p-2 m-2 border border-slate-300 hover:border-slate-200 rounded-3xl w-full h-4/5 focus:border-transparent focus:outline-blue-400 resize-none outline-none"
              placeholder="Paste your blog content here, or switch to URL tab above..."
              onChange={(e) =>
                setInputState((n: InputType) => ({ ...n, content: getLimitedInput(n.content, e.target.value) }))
              } 
              value={inputState.content}
            ></textarea>
          ),
        },
        {
          tab: "URL",
          node: (
            <input
              className="p-3 rounded-3xl border border-slate-300 hover:border-slate-200 focus:outline-blue-400 w-full mt-5"
              placeholder="Paste your URL here"
              onChange={(e) =>
                setInputState((n: InputType) => ({ ...n, urlContent: e.target.value }))
              } 
              value={inputState.urlContent}
            />
          ),
        },
      ]}
    />
  );
});

export default Input;
