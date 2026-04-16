import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const DangerCircleOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="DangerCircleOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M12.75 8a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0zM13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
      <path
        fillRule="evenodd"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m0-1.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15"
        clipRule="evenodd"
      />
    </g>
  </svg>
)
export default DangerCircleOutlineIcon
