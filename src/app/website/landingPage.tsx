import React, { ReactNode } from "react";
import Lightbox from "../lightbox/lightbox";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
const {
  atomOneDark,
} = require("react-syntax-highlighter/dist/esm/styles/prism");

const customStyle = {
  ...atomOneDark,
  backgroundColor: "transparent",
  textShadow: "none",
  'pre[class*="language-"]': {
    backgroundColor: "transparent",
    padding: "1rem", 
    textShadow: "none", 
    boxShadow: "none", 
  },
};

const LandingPage = () => {
  return (
    <>
      <div className="min-h-screen w-[40%] mx-auto pt-[200px]">
        {/* Hero */}
        <div className="mx-auto flex flex-col w-fit items-center mb-40">
          {/* Title */}
          <div className="text-5xl font-medium tracking-wider mb-3">
            lightbox
          </div>
          {/* Description */}
          <div className="text-xl mb-4">
            An image lightbox component for React.
          </div>
          {/* Buttons */}
          <div className="flex flex-row gap-5">
            {/* Preview */}
            <Lightbox
              title="lightbox"
              src="https://i.ibb.co/gw9kJcm/lightbox-4.png"
            >
              <CustomButton type={2}>Preview</CustomButton>
            </Lightbox>
            {/* Github */}
            <Link target="_blank" href="https://github.com/zxk-afz/lightbox">
              <CustomButton type={1}>
                <GithubIcon className="size-5" />
                Github
              </CustomButton>
            </Link>
          </div>
        </div>

        {/* Documentation */}
        <div className="flex gap-2 flex-col text-md font-medium select-none">
          Installation
          <CodeBlock text="npm install lightbox" />
          {/* Usage */}
          <div className="h-12" />
          Usage
          <CodeBlock
            text={`import { Lightbox } from 'lightbox'

function App() {
  return (
    <div>
      <Lightbox
        title="string"
        titleMaxLength={40}
        titleClassName="string"
        src="string"
        isOverlayClickable={true}
        overlayClassName="string"
        opacity={60}
        closeIconClassname="string"
        theme="dark"
        allowDrag={false}
        imageClassName="string"
      >
        // ...
      </Lightbox>
    </div>
  )
}`}
          />
          {/* Title */}
          <div className="h-12" />
          Title
          <div>
            The title displayed in the lightbox. This can be truncated if it
            exceeds the specified length (see titleMaxLength).
          </div>
          <CodeBlock
            text={`<Lightbox
  title="string"
  titleMaxLength={40}
  titleClassName="string"
>
  // ...
</Lightbox>`}
          />
          {/* Source */}
          <div className="h-12" />
          Source
          <div>
            The URL or path of the image to be displayed in the lightbox. This
            is the main image shown when the lightbox is opened.
          </div>
          <CodeBlock
            text={`<Lightbox src="url/path">
  // ...
</Lightbox>`}
          />
          {/* Overlay */}
          <div className="h-12" />
          Overlay
          <div>
            The overlay is the semi-transparent background layer that appears
            behind the lightbox content, dimming the rest of the screen. It
            allows users to focus on the lightbox while optionally providing a
            clickable area to close it.
          </div>
          <CodeBlock
            text={`<Lightbox
  isOverlayClickable={true}
  overlayClassName="string"
  opacity={60}
>
  // ...
</Lightbox>`}
          />
          {/* Close */}
          <div className="h-12" />
          Close
          <div>
            A custom class name for the close button's icon (X icon) that can be
            used to adjust its appearance, such as its size, color, or position.
          </div>
          <CodeBlock
            text={`<Lightbox closeIconClassName="string">
  // ...
</Lightbox>`}
          />
          {/* Theme */}
          <div className="h-12" />
          Theme
          <div>
            Defines the visual theme of the lightbox. It adjusts the background
            color and text color to either light or dark theme. "light" uses
            lighter colors, and "dark" uses darker colors.
          </div>
          <CodeBlock
            text={`<Lightbox theme="dark">
  // ...
</Lightbox>`}
          />
          {/* Image */}
          <div className="h-12" />
          Image
          <div>
            The main image shown. Custom class name for the image element
            itself, allowing additional styling like borders, shadows, or other
            visual effects. AllowDrag determines whether the image inside the
            lightbox can be dragged.
          </div>
          <CodeBlock
            text={`<Lightbox
  allowDrag={true} 
  imageClassName="string"
>
  // ...
</Lightbox>`}
          />
          {/* End */}
          <div className="h-20" />
          <div className="flex flex-col gap-1">
            This documentation provides a comprehensive overview of our lightbox
            component,
            <Link target="_blank" href="https://sonner.emilkowal.ski/" className="underline">
              with a design inspired by modern interfaces like Sonner.
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
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

const CodeBlock = (props: { text: string }) => {
  return (
    <div className="w-full select-text rounded-lg font-normal text-sm font-mono border border-[#262626] bg-[#171717]">
      <SyntaxHighlighter language="javascript" style={customStyle}>
        {props.text}
      </SyntaxHighlighter>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="text-sm w-full py-10 mt-32 px-[30vw] bg-[#17171769] border-t border-[#262626] flex gap-1">
      Made by
      <Link
        target="_blank"
        href="https://github.com/zxk-afz"
        className="font-bold hover:cursor-pointer"
      >
        Zxk-Afz.
      </Link>
    </div>
  );
};
