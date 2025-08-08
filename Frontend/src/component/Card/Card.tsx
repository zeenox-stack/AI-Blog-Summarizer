import React from "react";

interface CardType {
  logo: {
    src: string;
    alt: string;
    props: string;
  };
  header: string;
  body: string;
  k: number;
}

const Card: React.FC<CardType> = React.memo(({ logo, header, body, k }) => {
  return (
    <div
      className="p-6 rounded-3xl bg-white shadow-sm flex flex-col justify-start gap-y-2 w-full md:w-[30%] h-[85%] hover:shadow-lg transition-all duration-100"
      key={k}
    >
      <div className="flex justify-start">
        <img
          src={logo.src}
          alt={logo.alt}
          className={"p-3 h-12 rounded-full " + logo.props}
        />
      </div>
      <div className="mt-2 flex justify-start flex-col">
      <h3 className="text-lg text-gray-800 font-[Poppins] font-semibold">
        {header}
      </h3>
      <p className="font-normal font-[Poppins] text-gray-500 pb-2">{body}</p>
      </div>
    </div>
  );
});

export default Card;
