import React from "react";
import Cards from "../Cards/Cards";
import Action from "../CallToAction/Action";

interface AboutType {
  set: (val: string) => void;
}

const About: React.FC<AboutType> = React.memo(({ set }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <Cards />
      <Action set={set} />
    </div>
  );
});

export default About;
