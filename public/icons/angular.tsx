const AngularIcon = ({ width, height }: { width: number; height: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 100 100"
    width={width}
    height={height}
  >
    {" "}
    <mask
      id="a"
      width="95"
      height="100"
      x="3"
      y="0"
      maskUnits="userSpaceOnUse"
      style={{ maskType: "luminance" }}
    >
      {" "}
      <path fill="#fff" d="M97.5 0H3v100h94.5z" />{" "}
    </mask>
    <g mask="url(#a)">
      <path
        fill="url(#b)"
        d="m97.1 16.8-3.5 53.1L61.2 0zM74.5 85.5 50.3 99.6 25.7 85.5l4.7-12.1h39.5zM50.3 26.6l12.5 31.2H37.4zM6.5 69.9 3 16.8 38.9 0z"
      />{" "}
      <path
        fill="url(#c)"
        d="m97.1 16.8-3.5 53.1L61.2 0zM74.5 85.5 50.3 99.6 25.7 85.5l4.7-12.1h39.5zM50.3 26.6l12.5 31.2H37.4zM6.5 69.9 3 16.8 38.9 0z"
      />{" "}
    </g>
    <defs>
      <linearGradient
        id="b"
        x1="11.749"
        x2="86.67"
        y1="65.28"
        y2="29.655"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4a4a4a" /> <stop offset=".2" stopColor="#585858" />{" "}
        <stop offset=".4" stopColor="#565656" />{" "}
        <stop offset=".5" stopColor="#545454" />{" "}
        <stop offset=".7" stopColor="#545454" />{" "}
        <stop offset="1" stopColor="#3b3b3b" />{" "}
      </linearGradient>
      <linearGradient
        id="c"
        x1="22.632"
        x2="71.656"
        y1="10.021"
        y2="65.998"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#818181" />{" "}
        <stop offset="1" stopColor="#9b9b9b" stopOpacity="0" />{" "}
      </linearGradient>
    </defs>{" "}
  </svg>
);

export { AngularIcon };
