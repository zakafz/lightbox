# lightbox-kit

![npm](https://img.shields.io/npm/v/lightbox-kit)

## Links

[website](https://www.google.com)

[npm package](https://www.npmjs.com/package/lightbox-kit)


**Lightbox** Kit is a lightweight and customizable React component designed for creating visually appealing and interactive lightboxes. Perfect to showcase images, this component offers a sleek and user-friendly experience with configurable options.

## Installation

To install Lightbox, use the following npm command:
```bash
npm install lightbox-kit
```

## Usage

To use Lightbox in your project, import it as follows:

```javascript
import { Lightbox } from 'lightbox'

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
}
```

## Title

The title displayed in the lightbox. This can be truncated if it exceeds the specified length (see `titleMaxLength`).

Example:
```javascript
<Lightbox title="string" titleMaxLength={40} titleClassName="string"
  // ...
</Lightbox>
```

## Source

The URL or path of the image to be displayed in the lightbox. This is the main image shown when the lightbox is opened.

Example:
```javascript
<Lightbox src="url/path" alt="description"> // ... </Lightbox>
```

## Theme

Defines the visual theme of the lightbox. It adjusts the background color and text color to either light or dark theme. "light" uses lighter colors, and "dark" uses darker colors.

Exemple:
```javascript
<Lightbox theme="dark">
  // ...
</Lightbox>
```

## Image

The main image shown. Custom class name for the image element itself, allowing additional styling like borders, shadows, or other visual effects. `allowDrag` determines whether the image inside the lightbox can be dragged.

```javascript
<Lightbox
  allowDrag={true} 
  imageClassName="string"
>
  // ...
</Lightbox>
```

## Overlay

The overlay is the semi-transparent background layer that appears behind the lightbox content, dimming the rest of the screen. It allows users to focus on the lightbox while optionally providing a clickable area to close it.

Exemple:
```javascript
<Lightbox
  isOverlayClickable={true}
  overlayClassName="string"
  opacity={60}
>
  // ...
</Lightbox>
```

## Close

A custom class name for the close button's icon (X icon) that can be used to adjust its appearance, such as its size, color, or position.

Exemple:
```javascript
<Lightbox closeIconClassName="string">
  // ...
</Lightbox>
```
