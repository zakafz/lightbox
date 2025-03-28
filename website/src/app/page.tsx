"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import Lightbox from "lightbox-kit";
import "../../node_modules/lightbox-kit/index.css";
import ImageShowcase from "../assets/lightbox.png";
import { Toaster, toast } from "sonner";

const Home = () => {
  return (
    <>
      <Toaster richColors theme="dark" />
      <div className="min-h-screen w-[40%] max-2xl:w-[50%] max-xl:w-[60%] max-lg:w-[95%] mx-auto pt-[200px]">
        {/* Hero */}
        <div className="mx-auto flex flex-col w-fit items-center mb-40">
          {/* Title */}
          <div className="text-5xl font-medium tracking-wider mb-3">
            lightbox-kit
          </div>
          {/* Description */}
          <div className="text-xl mb-4">
            An image lightbox component for React.
          </div>
          {/* Buttons */}
          <div className="grid grid-cols-3 max-sm:grid-cols-2 gap-5">
            {/* Github */}
            <Link target="_blank" href="https://github.com/zxk-afz/lightbox">
              <CustomButton type={1}>
                <GithubIcon className="size-5" />
                Github
              </CustomButton>
            </Link>
            {/* Preview */}
            <div className="max-sm:hidden">
              <Lightbox title="lightbox" src={ImageShowcase} alt="lightbox">
                <CustomButton type={2}>Preview</CustomButton>
              </Lightbox>
            </div>
            {/* npm */}
            <Link
              target="_blank"
              href="https://www.npmjs.com/package/lightbox-kit"
            >
              <CustomButton type={3}>
                <svg
                  width="51.18"
                  height="20"
                  viewBox="0 0 256 100"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin meet"
                >
                  <path
                    d="M0 0v85.498h71.166V99.83H128V85.498h128V0H0z"
                    fill="#CB3837"
                  />
                  <path
                    d="M42.502 14.332h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V14.332H42.502zM85.498 14.332v71.166h28.664V71.166h28.17V14.332H85.498zM128 56.834h-13.838v-28.17H128v28.17zM184.834 14.332h-28.17v56.834h28.17V28.664h14.332v42.502h14.332V28.664h14.332v42.502h14.332V14.332h-57.328z"
                    fill="#FFF"
                  />
                </svg>
              </CustomButton>
            </Link>
            {/* Preview */}
            <div className="sm:hidden col-span-2">
              <Lightbox title="lightbox" src={ImageShowcase} alt="lightbox">
                <CustomButton type={2}>Preview</CustomButton>
              </Lightbox>
            </div>
          </div>
        </div>

        {/* Documentation */}
        <div className="flex gap-2 flex-col text-md font-medium">
          Installation
          <CodeBlock text="npm install lightbox-kit" />
          {/* Usage */}
          <div className="h-12" />
          Usage
          <CodeBlock
            text={`import Lightbox from 'lightbox-kit'
import 'lightbox-kit/styles';

function App() {
  return (
    <div>
      <Lightbox
        title="string"
        titleMaxLength={40}
        titleClassName="string"
        src="string"
        alt="string"
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
            text={`<Lightbox src="url/path" alt="description">
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
            Custom class name for the image element itself, allowing additional
            styling like borders, shadows, or other visual effects. AllowDrag
            determines whether the image inside the lightbox can be dragged.
          </div>
          <CodeBlock
            text={`<Lightbox
  allowDrag={true} 
  imageClassName="string"
>
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
          {/* End */}
          <div className="h-20" />
          <div className="flex flex-col gap-1">
            This documentation provides a comprehensive overview of our lightbox
            component,
            <Link
              target="_blank"
              href="https://sonner.emilkowal.ski/"
              className="underline"
            >
              with a design inspired by modern interfaces like Sonner.
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;

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

const CustomButton = (props: { children: ReactNode; type: 1 | 2 | 3 }) => {
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
      case 3:
        return (
          <div className="flex justify-center items-center gap-12 h-full">
            <div className="bg-gradient-to-b from-red-300/40 to-transparent p-[4px] rounded-[16px]">
              <button className="group w-[140px] p-[4px] rounded-[12px] bg-gradient-to-b from-red to-red-200/40 shadow-[0_1px_3px_rgba(255,0,0,0.5)] active:shadow-[0_0px_1px_rgba(255,0,0,0.5)] active:scale-[0.995]">
                <div className="bg-gradient-to-b from-red-500/50 to-red-500/70 rounded-[8px] px-2 py-1.5">
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
  const [highlightedCode, setHighlightedCode] = useState<string | null>(null);

  useEffect(() => {
    const code = Prism.highlight(
      props.text,
      Prism.languages.javascript,
      "javascript"
    );
    setHighlightedCode(code);
  }, [props.text]);

  if (!highlightedCode) {
    return (
      <div className="w-full h-[50px] rounded-lg font-normal text-sm font-mono border border-[#262626] bg-[#17171769]" />
    );
  }

  return (
    <pre
      className="w-full relative rounded-lg font-normal text-sm font-mono border border-[#262626]"
      style={{
        padding: "1rem",
        borderRadius: "8px",
        backgroundColor: "#17171769",
        fontFamily: "monospace",
        overflowX: "auto",
        fontSize: "13px",
      }}
    >
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
        onClick={() => {
          navigator.clipboard.writeText(props.text);
          toast.success("Succesfully copied code");
        }}
        className="absolute size-4 right-[1rem] text-zinc-500 top-[18px] cursor-pointer"
      >
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
      <code
        className="language-javascript"
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    </pre>
  );
};

const Footer = () => {
  return (
    <div className="text-sm w-full py-10 mt-32 pl-[30%] max-2xl:pl-[25%] max-xl:pl-[20%] max-lg:pl-[2.5%] bg-[#17171769] border-t border-[#262626] flex gap-1">
      Made by
      <Link
        target="_blank"
        href="https://github.com/zakafz"
        className="font-bold hover:cursor-pointer"
      >
        zakafz
      </Link>
    </div>
  );
};
