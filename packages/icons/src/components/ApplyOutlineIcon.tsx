import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const ApplyOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="ApplyOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M17.808 6.589a1 1 0 0 0-1.616-1.178l-5.156 7.075-3.344-3.208a1 1 0 1 0-1.384 1.444l4.17 4a1 1 0 0 0 1.5-.133zM5 17a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z" />
    </g>
  </svg>
)
export default ApplyOutlineIcon
