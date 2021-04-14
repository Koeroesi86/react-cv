import React from "react";
import { Link as L } from "@react-pdf/renderer";

export interface LinkComponentProps {
  src: string;
  color?: string;
  underline?: boolean;
}

const Link: React.FC<LinkComponentProps> = ({ children, src, color, underline }) => (
  // @ts-ignore
  <L src={src} style={{ color: color || "#000", textDecoration: underline === undefined || underline ? "underline" : "unset" }}>
    {children}
  </L>
);

export default Link;
