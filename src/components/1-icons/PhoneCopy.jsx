const SvgComponent = (props) => (
  
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="var(--claro)"
      d="M2.006 4.542C1.905 3.112 3.116 2 4.546 2h3.06c.734 0 1.396.442 1.678 1.121l1.28 3.078c.312.75.09 1.616-.542 2.124l-.798.64a.953.953 0 0 0-.266 1.182 13.72 13.72 0 0 0 4.638 5.122c.412.27.956.162 1.263-.223l.831-1.041a1.816 1.816 0 0 1 2.12-.544l3.071 1.283A1.822 1.822 0 0 1 22 16.424V19.5c0 1.433-1.151 2.596-2.577 2.494-9.12-.649-16.77-8.292-17.417-17.452Z"
    />
  </svg>
)
export default SvgComponent
