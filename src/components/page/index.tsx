import React from "react";
import { Page as P } from "@react-pdf/renderer";
import { PageSizes } from "@app-types";

export interface PageComponentProps {
  size?: PageSizes;
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-around" | "space-between" | "space-evenly";
  fontFamily?: string;
}

const Page: React.FC<PageComponentProps> = ({ children, size = "A4", justifyContent = "space-between", fontFamily }) => (
  <P
    size={size}
    style={{
      flexDirection: "column",
      justifyContent,
      backgroundColor: "#ffffff",
      fontFamily,
      paddingLeft: 40,
      paddingRight: 40,
    }}
  >
    {children}
  </P>
);

export default Page;
