import React from "react"; 
import Card from "../../component/Card/Card";  

import MultipleFormat from "../../assets/multiple.svg";
import Unlock from "../../assets/unlock.svg"; 
import Memory from "../../assets/memory.svg";

const Cards: React.FC = React.memo(() => {
    return (
      <div className="w-full h-auto md:h-4/5 flex flex-col md:flex-row justify-around items-center gap-y-5 md:gap-x-3 p-5">
        {[
          {
            logo: {
              src: Memory, 
              alt: "super proccessing logo", 
              props: "bg-amber-200"
            }, 
            header: "Smart Processing", 
            body: "Intelligently refines your text to produce summaries that are both precise and easy to read."
          },
          {
            logo: {
              src: MultipleFormat,
              alt: "multiple format logo",
              props: "bg-purple-200",
            },
            header: "Multiple Formats",
            body: "Choose from brief overviews, detailed summaries, bullet points, or keyboard extraction.",
          },
          {
            logo: {
              src: Unlock,
              alt: "free forever logo",
              props: "bg-blue-200",
            },
            header: "Always Free",
            body: "No registration, no limits, no hidden charges. Complete access to all features, forever.",
          },
        ].map(({ logo, header, body }, i) => {
          return <Card logo={logo} header={header} body={body} k={i} />;
        })}
      </div>
    );
  });
  
  export default Cards;