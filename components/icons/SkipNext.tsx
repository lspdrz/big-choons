import React from "react";

type Props = {
  color?: string;
  width?: string;
  height?: string;
};

export default function SkipNext({ color, height, width }: Props) {
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
        d="M5.6247 3.21914C5.32453 2.979 4.91328 2.93219 4.56681 3.09871C4.22035 3.26523 4 3.6156 4 4.00001V20C4 20.3844 4.22035 20.7348 4.56681 20.9013C4.91328 21.0678 5.32453 21.021 5.6247 20.7809L15.6247 12.7809C15.8619 12.5911 16 12.3038 16 12C16 11.6962 15.8619 11.4089 15.6247 11.2191L5.6247 3.21914ZM13.3992 12L6 17.9194V6.08063L13.3992 12Z"
        fill={color}
      />
      <path
        d="M20 5.00001C20 4.44772 19.5523 4.00001 19 4.00001C18.4477 4.00001 18 4.44772 18 5.00001V19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19V5.00001Z"
        fill={color}
      />
    </svg>
  );
}
SkipNext.defaultProps = {
  color: "#333",
  height: "24",
  width: "24",
};
