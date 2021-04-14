import React from "react";
import { IconProps } from "@app-types";
import { Path, Svg } from "@react-pdf/renderer";

export type IconFlowerComponentProps = IconProps;

const IconFlower: React.FC<IconFlowerComponentProps> = ({ children, width, height, color }) => (
  <Svg
    width={width}
    height={height || 12}
    style={{ position: "relative", top: (height || 12) / 4 }}
    viewBox="0 0 512 512"
  >
    <Path
      fill={color || "currentColor"}
      d="M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z"
    />
    {children}
  </Svg>
);

export default IconFlower;
