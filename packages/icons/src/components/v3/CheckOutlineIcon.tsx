import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const CheckOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="CheckOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path stroke="currentColor" strokeWidth={2} d="m4 11 6.5 7L20 6" />
  </svg>
)
export default CheckOutlineIcon
