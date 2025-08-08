import React, { useEffect } from "react";
import Modal from "../../component/Modal/Modal";
import Markdown from "../../component/Markdown/Markdown";

import Summarize from "../../assets/summarize.svg";
import Copy from "../../assets/copy.svg";
import Download from "../../assets/download.svg";
import { useAppContext } from "../../Utils/utils";
import { AppContext, type ContentType } from "../../App";
import { handleSummarizeContent, handleURLParsing } from "../../Services/api";

interface OutputProps {
  content: ContentType[];
  setContent: (val: string, isText?: boolean) => void;
  setStart: (val: boolean) => void;
}

const Output: React.FC<OutputProps> = React.memo(
  ({ content, setContent, setStart }) => {
    const { idx, setIdx, inputState, hasFetched } = useAppContext(AppContext);

    useEffect(() => {
      if (!hasFetched) return;

      if (inputState.content && !content[idx].textComplete) {
        setStart(true);
        handleSummarizeContent(
          inputState.content,
          (val: string) => {
            setContent(val);
            setStart(false);
          },
          idx - 1
        );
      } else if (inputState.urlContent && !content[idx].urlComplete) {
        setStart(true);
        handleURLParsing(
          inputState.urlContent,
          (val: string) => {
            setContent(val, false);
            setStart(false);
          },
          idx - 1
        );
      }
    }, [idx, content[idx].textComplete, content[idx].urlComplete]);

    return (
      <Modal
        heading="Output Content"
        logo={{
          src: Summarize,
          alt: "Summarize logo",
          props: "bg-blue-300",
        }}
        utilButtons={[
          {
            src: Copy,
            onClick: () => navigator.clipboard.writeText(content[idx]?.text),
          },
          {
            src: Download,
            onClick: () => {
              const blob = new Blob([content[idx]?.text], {
                type: "text/plain",
              });
              const url = URL.createObjectURL(blob);

              const a = document.createElement("a");
              a.href = url;
              a.download = "Summary.md";
              a.click();

              URL.revokeObjectURL(url);
            },
          },
        ]}
        bottomUtils={[[], [], [], []]}
        tabs={[
          {
            tab: "Brief",
            node: (
              <Markdown
                content={content[0].text}
                hasStarted={content[0].hasStarted}
              />
            ),
          },
          {
            tab: "Detailed",
            node: (
              <Markdown
                content={content[1].text}
                hasStarted={content[1].hasStarted}
              />
            ),
          },
          {
            tab: "Bullets",
            node: (
              <Markdown
                content={content[2].text}
                hasStarted={content[2].hasStarted}
              />
            ),
          },
          {
            tab: "Keywords",
            node: (
              <Markdown
                content={content[3].text}
                hasStarted={content[3].hasStarted}
              />
            ),
          },
        ]}
        setIdx={(n: number) => setIdx(n)}
      />
    );
  }
);

export default Output;
