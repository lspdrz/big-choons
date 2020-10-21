import React from "react";

type Props = {
  color?: string;
  width?: string;
  height?: string;
};

export default function Search({ color, height, width }: Props) {
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
        d="M16.6179 18.0317C15.0782 19.2635 13.1251 20 11 20C6.02944 20 2 15.9706 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11C20 13.1249 19.2636 15.0778 18.0321 16.6175L21.7075 20.2929C22.098 20.6834 22.098 21.3166 21.7075 21.7071C21.317 22.0976 20.6838 22.0976 20.2933 21.7071L16.6179 18.0317ZM4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 12.8865 17.2537 14.5987 16.0403 15.8575C16.0066 15.8835 15.9742 15.912 15.9433 15.9429C15.9124 15.9738 15.8839 16.0062 15.8579 16.0399C14.5991 17.2536 12.8867 18 11 18C7.13401 18 4 14.866 4 11Z"
        fill={color}
      />
    </svg>
  );
}
Search.defaultProps = {
  color: "#1A202C",
  height: "24",
  width: "24",
};
