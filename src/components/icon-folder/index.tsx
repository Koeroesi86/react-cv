import React from "react";
import { Path, Svg } from "@react-pdf/renderer";
import { IconProps } from "@app-types";

export type IconFolderComponentProps = IconProps;

const IconFolder: React.FC<IconFolderComponentProps> = ({ children, width = 12, height = 12, color }) => (
  <Svg
    width={width}
    height={height}
    style={{ position: "relative", top: height / 4 }}
    viewBox="0 0 512 512"
  >
    <Path
      fill={color || "#000"}
      d="M464 128H272l-54.63-54.63c-6-6-14.14-9.37-22.63-9.37H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48zm0 272H48V112h140.12l54.63 54.63c6 6 14.14 9.37 22.63 9.37H464v224z"
    />
    {children}
  </Svg>
);

export default IconFolder;
