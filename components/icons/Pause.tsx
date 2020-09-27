import React from "react";

type Props = {
  color?: string;
  width?: string;
  height?: string;
};

export default function Pause({ color, width, height }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 4C7.44772 4 7 4.44772 7 5V19C7 19.5523 7.44772 20 8 20H10C10.5523 20 11 19.5523 11 19V5C11 4.44772 10.5523 4 10 4H8Z"
        fill={color}
      />
      <path
        d="M14 4C13.4477 4 13 4.44772 13 5V19C13 19.5523 13.4477 20 14 20H16C16.5523 20 17 19.5523 17 19V5C17 4.44772 16.5523 4 16 4H14Z"
        fill={color}
      />
    </svg>
  );
}

Pause.defaultProps = {
  color: "white",
  width: "24",
  height: "24",
};
