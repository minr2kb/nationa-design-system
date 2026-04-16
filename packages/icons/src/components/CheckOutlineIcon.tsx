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
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20.614 5.21a1 1 0 0 1 .175 1.404l-9.333 12a1 1 0 0 1-1.523.065l-6.667-7.2a1 1 0 0 1 1.468-1.358l5.866 6.335 8.61-11.07a1 1 0 0 1 1.404-.175"
      clipRule="evenodd"
    />
  </svg>
)
export default CheckOutlineIcon
