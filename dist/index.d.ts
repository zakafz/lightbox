import React, { ReactNode } from 'react';

declare const Lightbox: ({ children, title, src, isOverlayClickable, overlayClassName, theme, opacity, closeIconClassname, allowDrag, imageClassName, titleMaxLength, titleClassName, alt }: {
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
}) => React.JSX.Element;

export { Lightbox };
