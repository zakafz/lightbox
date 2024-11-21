import { ReactNode, useRef } from "react";

// Lightbox Component
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
  alt,
}: {
  children: ReactNode;
  title: string;
  src: string | { src: string; [key: string]: any };
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
  const lightboxRef = useRef<HTMLDivElement>(null);

  const truncatedTitle =
    title.length > titleMaxLength
      ? `${title.slice(0, titleMaxLength)}...`
      : title;

  const openLightbox = () => {
    const lightbox = lightboxRef.current;
    if (lightbox) {
      lightbox.dataset.open = "true";
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = () => {
    const lightbox = lightboxRef.current;
    if (lightbox) {
      lightbox.dataset.open = "false";
      document.body.style.overflow = "auto";
    }
  };

  const handleEscKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <>
      <div
        ref={lightboxRef}
        data-open="false"
        className="fixed inset-0 z-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300"
        onKeyDown={(e) => {
          if (e.key === "Escape") closeLightbox();
        }}
        tabIndex={-1}
      >
        <Overlay
          isClickable={isOverlayClickable}
          overlayClassname={overlayClassName}
          opacity={opacity}
          closeLightbox={closeLightbox}
        />
        <Frame
          title={truncatedTitle}
          theme={theme}
          closeIconClassname={closeIconClassname}
          closeLightbox={closeLightbox}
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
      <div onClick={openLightbox} className="cursor-pointer">
        {children}
      </div>
    </>
  );
};

export default Lightbox;

// Overlay Component
const Overlay = ({
  isClickable,
  opacity,
  overlayClassname,
  closeLightbox,
}: {
  isClickable?: boolean;
  opacity: number;
  overlayClassname?: string;
  closeLightbox: () => void;
}) => (
  <div
    style={{ opacity: opacity / 100 }}
    onClick={isClickable ? closeLightbox : undefined}
    className={`fixed inset-0 bg-black transition-opacity duration-300 ${
      overlayClassname || ""
    }`}
  />
);

// MainImage Component
const MainImage = ({
  src,
  theme,
  allowDrag,
  className,
  alt,
}: {
  src: string | { src: string; [key: string]: any };
  theme: "light" | "dark";
  allowDrag: boolean;
  className?: string;
  alt: string;
}) => {
  const imageSrc = typeof src === "string" ? src : src.src;
  return (
    <div className="relative flex items-center justify-center">
      <img
        draggable={allowDrag}
        alt={alt}
        src={imageSrc}
        className={`rounded-2xl aspect-auto w-auto h-full border max-w-[95vw] max-h-[85vh] 
          ${theme === "light" ? "border-[#f3f3f3]" : "border-[#262626]"}
          ${className || ""}`}
      />
    </div>
  );
};

// Frame Component
const Frame = ({
  children,
  title,
  theme,
  closeIconClassname,
  closeLightbox,
  titleClassName,
}: {
  children: ReactNode;
  title: string;
  theme?: "light" | "dark";
  closeIconClassname?: string;
  closeLightbox: () => void;
  titleClassName?: string;
}) => (
  <div
    className={`relative z-10 rounded-3xl py-5 px-2 pb-2 transform transition-all duration-300 
      ${theme === "dark" ? "bg-[#171717]" : "bg-[#fcfcfc]"}`}
  >
    <div className="flex items-center justify-between mb-2 pr-4 pl-5">
      <div
        className={`text-lg font-medium 
          ${titleClassName || ""} 
          ${theme === "light" ? "text-black" : "text-white"}`}
      >
        {title}
      </div>
      <button
        onClick={closeLightbox}
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

// X Icon Component
const XIcon = ({ className }: { className?: string }) => (
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
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
