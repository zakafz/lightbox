import React from "react";

const Image = (props: { src: string; theme: 'light' | 'dark' }) => {
  return (
    <div className="w-full">
      <img src={props.src} className={`min-w-[30vw] max-w-[90vw] max-h-[85vh] rounded-2xl border ${props.theme === 'light' ? '' : 'border-[#262626]'}`} />
    </div>
  );
};

export default Image;
