import React from "react";
import Input from "../InputBox/Input";
import Output from "../OutputBox/Output";
import { AppContext, type ContentType, type InputType } from "../../App";
import { useAppContext } from "../../Utils/utils";
import About from "../About/About";

interface BodyType {
  content: ContentType[];
  setContent: React.Dispatch<React.SetStateAction<ContentType[]>>;
}

const Body: React.FC<BodyType> = React.memo(({ content, setContent }) => {
  const { idx, hasFetched, setHasFetched, setInputState } =
    useAppContext(AppContext);
  return (
    <main className="w-full h-full bg-gradient-to-br from-slate-50 to-blue-50 gap-y-12 md:gap-y-6 py-8 grow">
      <div className="flex justify-center items-center w-full h-1/6 font-[Poppins] text-gray-700 p-3 text-center">
        Paste text or Share a URL and get Intelligent Summaries in multiple
        formats - completely free, no signup required.
      </div>
      <div className="flex justify-center items-center flex-col md:flex-row gap-8 h-3/6 w-full">
        <Input
          setContent={(val: string, isText = true) =>
            setContent((n) => {
              const p = [...n];
              p[idx].text = val;
              isText
                ? (p[idx].textComplete = true)
                : (p[idx].urlComplete = true);
              if (!hasFetched) setHasFetched(true);
              return p;
            })
          }
          setStart={(val: boolean) =>
            setContent((n) => {
              const p = [...n];
              p[idx] = {
                ...p[idx],
                hasStarted: val,
              };
              return p;
            })
          }
        />
        <Output
          content={content}
          setContent={(val: string, isText = true) =>
            setContent((n) => {
              const p = [...n];
              p[idx].text = val;
              isText
                ? (p[idx].textComplete = true)
                : (p[idx].urlComplete = true);
              return p;
            })
          }
          setStart={(val: boolean) =>
            setContent((n) => {
              const p = [...n];
              p[idx] = {
                ...p[idx],
                hasStarted: val,
              };
              return p;
            })
          }
        />
      </div>
      <About
        set={(val: string) =>
          setInputState((n: InputType) => ({ ...n, content: val }))
        }
      />
    </main>
  );
});

export default Body;
