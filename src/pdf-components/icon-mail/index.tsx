import React from "react";
import { Polyline, Path, Svg } from "@react-pdf/renderer";
import { IconProps, IconPropTypes } from "../types";
import PropTypes from "prop-types";

// Outline icon from Feather (MIT), https://feathericons.com
export interface IconMailComponentProps extends IconProps {
  children?: React.ReactElement;
}

function IconMail({
  children, width, height, color,
}: IconMailComponentProps) {
  const stroke = {
    fill: "none",
    stroke: color,
    strokeWidth: 2.2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  } as const;

  return (
    <Svg
      width={width}
      height={height}
      style={{ position: "relative", top: height / 4 }}
      viewBox="0 0 24 24"
    >
      <Path {...stroke} d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <Polyline {...stroke} points="22,6 12,13 2,6" />
      {children}
    </Svg>
  );
}

IconMail.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node,
  ...IconPropTypes,
};

IconMail.defaultProps = {
  width: 12,
  height: 12,
  color: "#000",
  children: null,
};

export default IconMail;
