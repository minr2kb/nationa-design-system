import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const ArrowRightOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="ArrowRightOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      d="M18.193 11.713a.8.8 0 0 0-.163-.243l-5-5a.75.75 0 1 0-1.06 1.06l3.72 3.72H6.5a.75.75 0 0 0 0 1.5h9.19l-3.72 3.72a.75.75 0 1 0 1.06 1.06l5-5a.75.75 0 0 0 .163-.817"
    />
  </svg>
)
export default ArrowRightOutlineIcon
