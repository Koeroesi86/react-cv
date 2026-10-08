import React from "react";
import { Document as ReactDocument } from "@react-pdf/renderer";
import PropTypes from "prop-types";

export interface DocumentComponentProps {
  title?: string;
  author?: string;
  keywords?: string;
  subject?: string;
  language?: string;
  children?: React.ReactElement,
}

function Document({
  children, title, author, keywords, subject, language,
}: DocumentComponentProps) {
  return (
    <ReactDocument
      title={title}
      author={author}
      keywords={keywords}
      subject={subject}
      language={language}
      // the document language is only written to PDF 1.4 and newer
      pdfVersion="1.7"
    >
      {children}
    </ReactDocument>
  );
}

Document.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  keywords: PropTypes.string,
  subject: PropTypes.string,
  language: PropTypes.string,
  children: PropTypes.node,
};

Document.defaultProps = {
  title: "",
  author: "",
  keywords: "",
  subject: "",
  language: "en",
  children: null,
};

export default Document;
