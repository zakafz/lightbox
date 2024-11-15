"use client";
import React, { ReactNode, useState, useEffect } from "react";
import Image from "next/image";

// Lightbox
const Lightbox = ({
  children,
  title,
  src,
  isOverlayClickable = true,
  overlayClassName,
  theme = "dark",
  opacity = 60,
  closeIconClassname,
  allowDrag = true,
  imageClassName,
  titleMaxLength = 30,
  titleClassName,
  alt
}: {
  children: ReactNode;
  title: string;
  src: string;
  isOverlayClickable?: boolean;
  overlayClassName?: string;
  theme?: "light" | "dark";
  opacity?: number;
  closeIconClassname?: string;
  allowDrag?: boolean;
  imageClassName?: string;
  titleMaxLength?: number;
  titleClassName?: string;
  alt: string;
}) => {
  const [open, setOpen] = useState(false);
  const truncatedTitle =
    title.length > titleMaxLength
      ? title.slice(0, titleMaxLength) + "..."
      : title;

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 
            ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <Overlay
          isClickable={isOverlayClickable}
          overlayClassname={overlayClassName}
          opacity={opacity}
          setOpen={setOpen}
        />
        <Frame
          title={truncatedTitle}
          theme={theme}
          closeIconClassname={closeIconClassname}
          setOpen={setOpen}
          open={open}
          titleClassName={titleClassName}
        >
          <MainImage
            src={src}
            alt={alt}
            theme={theme}
            allowDrag={allowDrag}
            className={imageClassName}
          />
        </Frame>
      </div>
      <div onClick={() => setOpen(true)}>{children}</div>
    </>
  );
};

export default Lightbox;

// Lightbox overlay component
const Overlay = ({
  isClickable,
  opacity,
  overlayClassname,
  setOpen,
}: {
  isClickable?: boolean;
  opacity: number;
  overlayClassname?: string;
  setOpen: (state: boolean) => void;
}) => {
  return (
    <div
      style={{ opacity: opacity / 100 }}
      onClick={() => isClickable && setOpen(false)}
      className={`fixed inset-0 bg-black transition-opacity duration-300 
        ${overlayClassname || ""}`}
    />
  );
};

// Lightbox image component
const MainImage = ({
  src,
  theme,
  allowDrag,
  className,
  alt,
}: {
  src: string;
  theme: "light" | "dark";
  allowDrag: boolean;
  className?: string;
  alt: string;
}) => {
  return (
    <div className="w-full">
      <Image
        draggable={allowDrag}
        alt={alt}
        src={src}
        className={`min-w-[30vw] max-w-[90vw] max-h-[85vh] rounded-2xl border
            ${theme === "light" ? "border-[#f3f3f3]" : "border-[#262626]"}
            ${className || ""}`}
      />
    </div>
  );
};

// Lightbox frame component
const Frame = ({
  children,
  title,
  theme,
  closeIconClassname,
  setOpen,
  open,
  titleClassName,
}: {
  children: ReactNode;
  title: string;
  theme?: "light" | "dark";
  closeIconClassname?: string;
  setOpen: (state: boolean) => void;
  open: boolean;
  titleClassName?: string;
}) => {
  return (
    <div
      className={`relative z-10 rounded-3xl py-5 px-2 pb-2 transform transition-all duration-300 
            ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"} 
            ${theme === "dark" ? "bg-[#171717]" : "bg-[#fcfcfc]"}`}
    >
      <div className="flex items-center justify-between mb-2 pr-4 pl-5">
        <div
          className={`text-lg font-medium 
            ${titleClassName}
            ${theme === "light" ? "text-black" : "text-white"}`}
        >
          {title}
        </div>
        <button
          onClick={() => setOpen(false)}
          className={`rounded-md transition-all duration-200 p-1 
            ${theme === "light" ? "hover:bg-[#f3f3f3]" : "hover:bg-[#262626]"}`}
        >
          <XIcon
            className={`size-5 
                ${theme === "light" ? "text-black" : "text-white"} 
                ${closeIconClassname || ""}`}
          />
        </button>
      </div>
      {children}
    </div>
  );
};

// X icon asset
const XIcon = (props: { className?: string }) => {
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
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
};
