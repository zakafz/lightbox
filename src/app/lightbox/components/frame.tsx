import React, { ReactNode } from "react";
import XIcon from "../assets/x";

const Frame = (props: {
  children: ReactNode;
  title: string;
  theme?: "light" | "dark";
  closeIconClassname?: string;
  setOpen: (state: boolean) => void;
}) => {
  return (
    <div
      className={`p-5 pb-2 px-2 rounded-3xl z-10 ${
        props.theme === "dark" ? "bg-[#171717]" : "bg-[]"
      }`}
    >
      <div className="w-full flex justify-between items-center mb-2 px-4">
        <div className="font-medium text-lg">{props.title}</div>
        <button
          onClick={() => props.setOpen(false)}
          className="rounded-md hover:bg-[#262626] transition-all duration-200 p-1"
        >
          <XIcon className={`size-5 ${props.closeIconClassname}`} />
        </button>
      </div>
      {props.children}
    </div>
  );
};

export default Frame;
