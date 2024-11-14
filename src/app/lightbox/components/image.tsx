import React from "react";

const Image = (props: {
  src: string;
  theme: "light" | "dark";
  allowDrag: boolean;
}) => {
  return (
    <div className="w-full">
      <img
        draggable={props.allowDrag}
        src={props.src}
        className={`min-w-[30vw] max-w-[90vw] max-h-[85vh] rounded-2xl border
          ${props.theme === "light" ? "border-[#f3f3f3]" : "border-[#262626]"}
          `}
      />
    </div>
  );
};

export default Image;
