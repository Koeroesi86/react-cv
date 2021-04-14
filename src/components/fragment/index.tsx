import React from "react";

export interface FragmentComponentProps {
  node: string;
}

const Fragment: React.FC<FragmentComponentProps> = ({ node }) => <>{node}</>;

export default Fragment;
