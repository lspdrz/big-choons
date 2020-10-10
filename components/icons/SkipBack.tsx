import React from "react";

type Props = {
  color?: string;
  width?: string;
  height?: string;
};

export default function SkipBack({ color, width, height }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 4.00001C20 3.6156 19.7797 3.26523 19.4332 3.09871C19.0867 2.93219 18.6755 2.979 18.3753 3.21914L8.37531 11.2191C8.13809 11.4089 8 11.6962 8 12C8 12.3038 8.13809 12.5911 8.37531 12.7809L18.3753 20.7809C18.6755 21.021 19.0867 21.0678 19.4332 20.9013C19.7797 20.7348 20 20.3844 20 20V4.00001ZM18 17.9194L10.6008 12L18 6.08063V17.9194ZM6 5.00001C6 4.44772 5.55228 4.00001 5 4.00001C4.44772 4.00001 4 4.44772 4 5.00001V19C4 19.5523 4.44772 20 5 20C5.55228 20 6 19.5523 6 19V5.00001Z"
        fill={color}
      />
    </svg>
  );
}

SkipBack.defaultProps = {
  color: "#1A202C",
  height: "24",
  width: "24",
};
