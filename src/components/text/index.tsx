import React from "react";
import { Text as T } from "@react-pdf/renderer";

export interface TextComponentProps {
  text: string;
  color: string;
  size?: number;
  weight?: number;
  lineHeight?: number;
  underline?: boolean;
  align?: "left" | "center" | "right";
}

const Text: React.FC<TextComponentProps> = ({ children, ...props }) => (
  <T
    style={{
      color: props?.color || "#000",
      fontSize: props?.size || 12,
      fontWeight: props?.weight,
      textAlign: props?.align || "left",
      lineHeight: props?.lineHeight,
      textOverflow: "ellipsis",
    }}
    hyphenationCallback={a => [a]}
  >
    {props?.text && props.text}
    {children}
  </T>
);

export default Text;
