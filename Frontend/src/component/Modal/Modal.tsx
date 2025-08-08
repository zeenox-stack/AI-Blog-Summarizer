import React, { useState } from "react";

interface ModalType {
  heading: string;
  logo: {
    src: string | null;
    props: string;
    alt: string;
  };
  tabs: {
    tab: string;
    node: React.ReactNode;
  }[];
  utilButtons: {
    src: string;
    onClick?: (val?: any) => any | void;
  }[];
  bottomUtils: React.ReactNode[][];
  setIdx?: (n: number) => void;
}

const Modal: React.FC<ModalType> = React.memo(
  ({ heading, logo, tabs, utilButtons, bottomUtils, setIdx }) => {
    const [tabIdx, setTabIdx] = useState(0);

    return (
      <div className="p-6 rounded-3xl shadow-md border-slate-300/50 bg-white flex gap-x-0 gap-y-1 flex-col w-[90%] h-4/5 md:h-[calc(16rem+11vh)] md:w-2/5">
        <div className="flex justify-between gap-y-0 gap-x-1 mb-1">
          <div className="w-2/3 flex justify-start">
            <div className="flex justify-between items-center gap-x-3">
              {logo.src && (
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={"p-1 rounded-full h-7 " + logo.props}
                />
              )}
              <h2 className="text-xl font-semibold">{heading}</h2>
            </div>
          </div>
          <div className="flex justify-evenly items-center w-1/5">
            {utilButtons.length !== 0 &&
              utilButtons.map(({ src, onClick }, i) => {
                return (
                  <button key={i} className="rounded-full bg-blue-50 p-1">
                    <img
                      src={src}
                      className="h-5"
                      onClick={() => onClick?.()}
                    />
                  </button>
                );
              })}
          </div>
        </div>

        <div className="flex flex-col justify-start">
          {tabs.length > 0 && (
            <div className="flex justify-start gap-y-0 gap-x-4 pointer-events-auto mt-0 pl-1 overflow-x-auto">
              {tabs.map(({ tab }, i) => {
                return (
                  <span
                    className={
                      "cursor-pointer hover:bg-gray-50 p-2 rounded-tr-sm rounded-tl-sm relative transition-all duration-150 " +
                      (tab === tabs[tabIdx].tab
                        ? "text-blue-400 border-b-[4px] border-blue-300"
                        : "text-gray-200 border-b-[4px] border-transparent")
                    }
                    autoFocus={true}
                    key={i}
                    onClick={() => {
                      setTabIdx(i);
                      setIdx?.(i);
                    }}
                  >
                    {tab}
                  </span>
                );
              })}
            </div>
          )}
          <hr />
        </div>
        <div className="w-full h-full">{tabs[tabIdx]?.node}</div>
        {bottomUtils[tabIdx]?.length > 0 && (
          <div className="flex flex-row-reverse justify-between items-center px-2">
            {bottomUtils[tabIdx]?.map((util, i) => {
              return <div key={i}>{util}</div>;
            })}
          </div>
        )}
      </div>
    );
  }
);

export default Modal;
