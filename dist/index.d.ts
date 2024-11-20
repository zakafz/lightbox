import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

declare const Lightbox: ({ children, title, src, isOverlayClickable, overlayClassName, theme, opacity, closeIconClassname, allowDrag, imageClassName, titleMaxLength, titleClassName, alt, }: {
    children: ReactNode;
    title: string;
    src: string | {
        src: string;
        [key: string]: any;
    };
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
}) => react_jsx_runtime.JSX.Element;

export { Lightbox as default };
