import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const ControlOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="ControlOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M17.807 6.286H19A.857.857 0 1 1 19 8h-1.193a2 2 0 0 1-3.615 0H5a.857.857 0 1 1 0-1.714h9.192a2 2 0 0 1 3.615 0M5 11.143a.857.857 0 1 0 0 1.714h2.192a2 2 0 0 0 3.615 0H19a.857.857 0 1 0 0-1.714h-8.192a2 2 0 0 0-3.616 0zM13 19.357a2 2 0 0 0 1.86-1.263H19a.857.857 0 0 0 0-1.714h-4.255a2 2 0 0 0-3.49 0H5a.857.857 0 0 0 0 1.714h6.14A2 2 0 0 0 13 19.357" />
    </g>
  </svg>
)
export default ControlOutlineIcon
