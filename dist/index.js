"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/app/lightbox/index.ts
var lightbox_exports = {};
__export(lightbox_exports, {
  Lightbox: () => lightbox_default
});
module.exports = __toCommonJS(lightbox_exports);

// src/app/lightbox/lightbox.tsx
var import_react = __toESM(require("react"));
var import_image = __toESM(require("next/image"));
var Lightbox = ({
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
}) => {
  const [open, setOpen] = (0, import_react.useState)(false);
  const truncatedTitle = title.length > titleMaxLength ? title.slice(0, titleMaxLength) + "..." : title;
  (0, import_react.useEffect)(() => {
    const handleEsc = (event) => {
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
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: `fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 
            ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`
    },
    /* @__PURE__ */ import_react.default.createElement(
      Overlay,
      {
        isClickable: isOverlayClickable,
        overlayClassname: overlayClassName,
        opacity,
        setOpen
      }
    ),
    /* @__PURE__ */ import_react.default.createElement(
      Frame,
      {
        title: truncatedTitle,
        theme,
        closeIconClassname,
        setOpen,
        open,
        titleClassName
      },
      /* @__PURE__ */ import_react.default.createElement(
        MainImage,
        {
          src,
          alt,
          theme,
          allowDrag,
          className: imageClassName
        }
      )
    )
  ), /* @__PURE__ */ import_react.default.createElement("div", { onClick: () => setOpen(true) }, children));
};
var lightbox_default = Lightbox;
var Overlay = ({
  isClickable,
  opacity,
  overlayClassname,
  setOpen
}) => {
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      style: { opacity: opacity / 100 },
      onClick: () => isClickable && setOpen(false),
      className: `fixed inset-0 bg-black transition-opacity duration-300 
        ${overlayClassname || ""}`
    }
  );
};
var MainImage = ({
  src,
  theme,
  allowDrag,
  className,
  alt
}) => {
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "relative w-full" }, /* @__PURE__ */ import_react.default.createElement(
    import_image.default,
    {
      draggable: allowDrag,
      alt,
      src,
      className: `rounded-2xl border max-w-[95vw] w-fit h-fit max-h-[85vh] aspect-auto object-none
      ${theme === "light" ? "border-[#f3f3f3]" : "border-[#262626]"}
      ${className || ""}`
    }
  ));
};
var Frame = ({
  children,
  title,
  theme,
  closeIconClassname,
  setOpen,
  open,
  titleClassName
}) => {
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: `relative z-10 rounded-3xl py-5 px-2 pb-2 transform transition-all duration-300 
            ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"} 
            ${theme === "dark" ? "bg-[#171717]" : "bg-[#fcfcfc]"}`
    },
    /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center justify-between mb-2 pr-4 pl-5" }, /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: `text-lg font-medium 
            ${titleClassName}
            ${theme === "light" ? "text-black" : "text-white"}`
      },
      title
    ), /* @__PURE__ */ import_react.default.createElement(
      "button",
      {
        onClick: () => setOpen(false),
        className: `rounded-md transition-all duration-200 p-1 
            ${theme === "light" ? "hover:bg-[#f3f3f3]" : "hover:bg-[#262626]"}`
      },
      /* @__PURE__ */ import_react.default.createElement(
        XIcon,
        {
          className: `size-5 
                ${theme === "light" ? "text-black" : "text-white"} 
                ${closeIconClassname || ""}`
        }
      )
    )),
    children
  );
};
var XIcon = (props) => {
  return /* @__PURE__ */ import_react.default.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: props.className
    },
    /* @__PURE__ */ import_react.default.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    /* @__PURE__ */ import_react.default.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Lightbox
});
