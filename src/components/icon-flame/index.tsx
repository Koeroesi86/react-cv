import React from "react";
import { IconProps } from "@app-types";
import { Path, Svg } from "@react-pdf/renderer";

export type IconFlameComponentProps = IconProps;

const IconFlame: React.FC<IconFlameComponentProps> = ({ children, ...props }) => (
  <Svg
    viewBox="0 0 384 512"
    width={props.width}
    height={props.height}
    style={{ position: "relative", top: (props?.height || 12) / 4 }}
  >
    <Path
      fill={props?.color || "currentColor"}
      d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"
    />
    {children}
  </Svg>
);

export default IconFlame;
