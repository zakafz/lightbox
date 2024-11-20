"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        className: `fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 
            ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Overlay,
            {
              isClickable: isOverlayClickable,
              overlayClassname: overlayClassName,
              opacity,
              setOpen
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            Frame,
            {
              title: truncatedTitle,
              theme,
              closeIconClassname,
              setOpen,
              open,
              titleClassName,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                MainImage,
                {
                  src,
                  alt,
                  theme,
                  allowDrag,
                  className: imageClassName
                }
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { onClick: () => setOpen(true), children })
  ] });
};
var src_default = Lightbox;
var Overlay = ({
  isClickable,
  opacity,
  overlayClassname,
  setOpen
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative w-full h-full flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "img",
    {
      draggable: allowDrag,
      alt,
      src,
      className: `rounded-2xl border max-w-full max-h-full w-auto h-auto
        ${theme === "light" ? "border-[#f3f3f3]" : "border-[#262626]"}
        ${className || ""}`,
      style: {
        maxWidth: "95vw",
        width: "100%",
        height: "auto",
        maxHeight: "85vh",
        objectFit: "contain"
      }
    }
  ) });
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      className: `relative z-10 rounded-3xl py-5 px-2 pb-2 transform transition-all duration-300 
            ${open ? "opacity-100 scale-100" : "opacity-0 scale-95"} 
            ${theme === "dark" ? "bg-[#171717]" : "bg-[#fcfcfc]"}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between mb-2 pr-4 pl-5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "div",
            {
              className: `text-lg font-medium 
            ${titleClassName}
            ${theme === "light" ? "text-black" : "text-white"}`,
              children: title
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              onClick: () => setOpen(false),
              className: `rounded-md transition-all duration-200 p-1 
            ${theme === "light" ? "hover:bg-[#f3f3f3]" : "hover:bg-[#262626]"}`,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                XIcon,
                {
                  className: `size-5 
                ${theme === "light" ? "text-black" : "text-white"} 
                ${closeIconClassname || ""}`
                }
              )
            }
          )
        ] }),
        children
      ]
    }
  );
};
var XIcon = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      className: props.className,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
      ]
    }
  );
};
