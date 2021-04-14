import React from "react";
import { IconProps } from "@app-types";
import { Svg, Circle as C } from "@react-pdf/renderer";

export type IconRingComponentProps = IconProps;

const IconRing: React.FC<IconRingComponentProps> = ({ children, width, height, color }) => (
  <Svg viewBox="0 0 100 100" width={width} height={height}>
    <C
      cx="50"
      cy="50"
      r="40"
      stroke={color || "#000"}
      strokeWidth="15"
    />
    {children}
  </Svg>
);

export default IconRing;
