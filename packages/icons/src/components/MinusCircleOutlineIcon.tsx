import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const MinusCircleOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="MinusCircleOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M8 11.357a.643.643 0 0 0 0 1.286h8a.643.643 0 0 0 0-1.286z" />
      <path
        fillRule="evenodd"
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-1.5 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0"
        clipRule="evenodd"
      />
    </g>
  </svg>
)
export default MinusCircleOutlineIcon
