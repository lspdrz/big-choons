import React from 'react'

const Spinner: React.FC = () => {
  return (
    <svg
      className="animate-spin my-8 mx-auto"
      width="65px"
      height="65px"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="mx-auto"
        style={{
          strokeDasharray: '187',
          strokeDashoffset: '0',
          transformOrigin: 'center',
          animation: 'colors 5.2s ease-in-out infinite, dash 1.3s ease-in-out infinite',
        }}
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      ></circle>
    </svg>
  )
}

export default Spinner
