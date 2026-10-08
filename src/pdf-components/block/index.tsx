import React from "react";
import { View } from "@react-pdf/renderer";
import * as PropTypes from "prop-types";
import {
  ai,
  alignItems,
  fd,
  flexDirection,
  flexGrow,
  flexWrap,
  fw,
  jc,
  justifyContent,
  overflow,
  pos,
  position,
  resolveFlexShrink,
} from "../types";

export interface BlockComponentProps {
  position?: pos;
  top?: number;
  left?: number;
  width?: number;
  height?: number;
  paddingLeft?: number;
  paddingRight?: number;
  id?: string;
  backgroundColor?: string;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: number;
  flexDirection?: fd;
  justifyContent?: jc;
  alignItems?: ai;
  flexWrap?: fw;
  overflow?: "hidden";
  children?: React.ReactElement | React.ReactElement[];
}

function Block({ children, id, flexShrink = 0, ...props }: BlockComponentProps) {
  return (
    <View id={id} style={{ ...props, flexShrink: resolveFlexShrink(flexShrink) }}>
      {children}
    </View>
  );
}

Block.propTypes = {
  position: PropTypes.oneOf(position),
  top: PropTypes.number,
  left: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  paddingLeft: PropTypes.number,
  paddingRight: PropTypes.number,
  id: PropTypes.string,
  backgroundColor: PropTypes.string,
  flexGrow: PropTypes.oneOf(flexGrow),
  flexShrink: PropTypes.oneOf(flexGrow),
  flexBasis: PropTypes.number,
  flexDirection: PropTypes.oneOf(flexDirection),
  flexWrap: PropTypes.oneOf(flexWrap),
  justifyContent: PropTypes.oneOf(justifyContent),
  alignItems: PropTypes.oneOf(alignItems),
  overflow: PropTypes.oneOf(overflow),
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
};

Block.defaultProps = {
  flexGrow: 0,
  flexWrap: "wrap",
}

export default Block;
