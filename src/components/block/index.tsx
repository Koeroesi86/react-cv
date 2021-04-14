import React from "react";
import { View } from "@react-pdf/renderer";

export interface BlockComponentProps {
  position?: "absolute" | "relative";
  top?: number;
  left?: number,
  width?: number;
  height?: number;
  id?: string;
  backgroundColor?: string;
  flexGrow?: number;
  flexDirection?: "row" | "column";
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-around" | "space-between" | "space-evenly";
  alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  overflow?: "hidden";
}

const Block: React.FC<BlockComponentProps> = ({ children, ...props }) => (
  <View
    id={props.id}
    style={{
      position: props.position,
      width: props.width,
      height: props.height,
      backgroundColor: props.backgroundColor,
      flexGrow: props.flexGrow || 0,
      flexDirection: props.flexDirection,
      justifyContent: props.justifyContent,
      alignItems: props.alignItems,
      overflow: props.overflow,
      flexWrap: "wrap",
    }}
  >
    {children}
  </View>
);

export default Block;
