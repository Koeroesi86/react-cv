import React from "react";
import { Circle, Path, Svg } from "@react-pdf/renderer";
import { IconProps, IconPropTypes } from "../types";
import PropTypes from "prop-types";

// Outline icon from Feather (MIT), https://feathericons.com
export interface IconMapPinComponentProps extends IconProps {
  children?: React.ReactElement;
}

function IconMapPin({
  children, width, height, color,
}: IconMapPinComponentProps) {
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
      <Path {...stroke} d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <Circle {...stroke} cx="12" cy="10" r="3" />
      {children}
    </Svg>
  );
}

IconMapPin.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node,
  ...IconPropTypes,
};

IconMapPin.defaultProps = {
  width: 12,
  height: 12,
  color: "#000",
  children: null,
};

export default IconMapPin;
