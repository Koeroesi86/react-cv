import React from "react";
import { Document as ReactDocument } from "@react-pdf/renderer";

export interface DocumentComponentProps {
  title?: string;
  author?: string;
  keywords?: string;
}

const Document: React.FC<DocumentComponentProps> = ({ children, title, author, keywords }) => (
  <ReactDocument title={title} author={author} keywords={keywords}>
    {children}
  </ReactDocument>
);

export default Document;
