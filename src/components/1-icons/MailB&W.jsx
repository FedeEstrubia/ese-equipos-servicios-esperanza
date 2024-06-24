const SvgComponent = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={800}
      height={800}
      viewBox="0 0 24 24"
      {...props}
    >
      <title />
      <g
        fill="none"
        stroke="#ccc"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="m4 8.2 8 5.9 8-5.9" />
        <rect width={18} height={14} x={3} y={6.5} rx={2} ry={2} />
      </g>
    </svg>
  )
  export default SvgComponent
  