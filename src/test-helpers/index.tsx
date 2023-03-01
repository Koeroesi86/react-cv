import { Document, Page } from "@react-pdf/renderer";
import React from "react";

// eslint-disable-next-line import/prefer-default-export,func-names
export const Wrapper: React.FC = function ({ children }) {
  return (
    <Document><Page>{children}</Page></Document>
  );
};
