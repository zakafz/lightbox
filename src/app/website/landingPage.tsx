import React, { ReactNode } from "react";
import Lightbox from "../lightbox/lightbox";

const LandingPage = () => {
  return (
    <div className="min-h-screen w-[40%] mx-auto pt-[200px]">
      <div className="mx-auto flex flex-col w-fit items-center">
        {/* Title */}
        <div className="text-5xl font-medium tracking-wider mb-3">lightbox</div>
        {/* Description */}
        <div className="text-xl mb-4">
          An image lightbox component for React.
        </div>
        {/* Buttons */}
        <div className="flex flex-row gap-5">
          {/* Preview */}
          <Lightbox title="lightbox previewer" src="https://i.ibb.co/gw9kJcm/lightbox-4.png">
            <CustomButton type={2}>Preview</CustomButton>
          </Lightbox>
          {/* Github */}
          <CustomButton type={1}>
            <GithubIcon className="size-5" />
            Github
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

const GithubIcon = (props: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
};

const CustomButton = (props: { children: ReactNode; type: 1 | 2 }) => {
  function render() {
    switch (props.type) {
      case 1:
        return (
          <div className="flex justify-center items-center gap-12 h-full">
            <div className="bg-gradient-to-b from-gray-800/40 to-transparent p-[4px] rounded-[16px]">
              <button className="group w-[140px] p-[4px] rounded-[12px] bg-gradient-to-b from-gray-700 to-gray-600 shadow-[0_2px_4px_rgba(0,0,0,0.7)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.6)] active:shadow-[0_0px_1px_rgba(0,0,0,0.8)] active:scale-[0.995] transition-all duration-200">
                <div className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-[8px] px-3 py-1.5">
                  <div className="flex gap-2 items-center justify-center">
                    <span className="font-semibold text-white flex justify-center items-center gap-2">
                      {props.children}
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex justify-center items-center gap-12 h-full">
            <div className="bg-gradient-to-b from-stone-300/40 to-transparent p-[4px] rounded-[16px]">
              <button className="group w-[140px] p-[4px] rounded-[12px] bg-gradient-to-b from-white to-stone-200/40 shadow-[0_1px_3px_rgba(0,0,0,0.5)] active:shadow-[0_0px_1px_rgba(0,0,0,0.5)] active:scale-[0.995]">
                <div className="bg-gradient-to-b from-stone-200/40 to-white/80 rounded-[8px] px-2 py-1.5">
                  <div className="flex gap-2 items-center justify-center">
                    <span className="font-semibold text-black">
                      {props.children}
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        );
    }
  }
  return render();
};
