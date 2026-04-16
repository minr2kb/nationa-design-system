import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const CheckCircleOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="CheckCircleOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M15.564 10.494a.75.75 0 1 0-1.128-.988l-2.983 3.409-1.934-1.856a.75.75 0 1 0-1.038 1.082l2.5 2.4a.75.75 0 0 0 1.083-.047z" />
      <path
        fillRule="evenodd"
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-1.5 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0"
        clipRule="evenodd"
      />
    </g>
  </svg>
)
export default CheckCircleOutlineIcon
