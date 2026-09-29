import React from "react";
import { Document, Page } from "@pdf-components";

export function Wrapper({ children }: { children: React.ReactElement }) {
  return (
    <Document><Page>{children}</Page></Document>
  );
}
