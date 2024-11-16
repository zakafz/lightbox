import React, { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

declare const Lightbox: ({ children, title, src, isOverlayClickable, overlayClassName, theme, opacity, closeIconClassname, allowDrag, imageClassName, titleMaxLength, titleClassName, alt, }: {
    children: ReactNode;
    title: string;
    src: string | StaticImageData;
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
