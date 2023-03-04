import React from "react";
import { Document, Page } from "@koeroesi86/react-pdf-components";

// eslint-disable-next-line import/prefer-default-export,func-names
export function Wrapper({ children }: { children: React.ReactElement }) {
  return (
    <Document><Page>{children}</Page></Document>
  );
}
