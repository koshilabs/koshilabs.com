import React from "react";
import FloatingSVG from "./FloatingSVG";

// Interface for SVG element configuration
interface SVGElement {
  icon: React.ReactNode;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  delay?: number;
  opacity?: number;
}

interface FloatingSVGGroupProps {
  elements: SVGElement[];
  maxElements?: number; // Limit the number of elements to render
}

// A component that renders a group of FloatingSVG elements efficiently
const FloatingSVGGroup: React.FC<FloatingSVGGroupProps> = ({
  elements,
  maxElements = 3, // Default to 3 elements to reduce DOM size
}) => {
  // Take only the first maxElements or all if elements length is less
  const limitedElements = elements.slice(0, maxElements);

  return (
    <>
      {limitedElements.map((element, index) => (
        <FloatingSVG
          key={index}
          top={element.position.top}
          left={element.position.left}
          right={element.position.right}
          bottom={element.position.bottom}
          delay={element.delay}
          size={element.size}
          opacity={element.opacity}
        >
          {element.icon}
        </FloatingSVG>
      ))}
    </>
  );
};

export default FloatingSVGGroup;
