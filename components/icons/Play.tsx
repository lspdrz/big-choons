import React from "react";

type Props = {
  color?: string;
  width?: string;
  height?: string;
};

export default function Play({ color, width, height }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 5.86852C7 5.06982 7.89015 4.59343 8.5547 5.03647L17.7519 11.168C18.3457 11.5638 18.3457 12.4362 17.7519 12.8321L8.5547 18.9635C7.89014 19.4066 7 18.9302 7 18.1315V5.86852Z"
        fill={color}
      />
    </svg>
  );
}

Play.defaultProps = {
  color: "white",
  width: "24",
  height: "24",
};
