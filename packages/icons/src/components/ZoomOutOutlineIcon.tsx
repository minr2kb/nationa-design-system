import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const ZoomOutOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="ZoomOutOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M7.75 9.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z" />
      <path
        fillRule="evenodd"
        d="M3 10a7 7 0 1 1 12.6 4.2 1 1 0 0 1 .107.093l4 4a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1-.093-.107A7 7 0 0 1 3 10m7-5a5 5 0 1 0 0 10 5 5 0 0 0 0-10"
        clipRule="evenodd"
      />
    </g>
  </svg>
)
export default ZoomOutOutlineIcon
