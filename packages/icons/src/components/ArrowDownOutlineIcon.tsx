import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const ArrowDownOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="ArrowDownOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12.287 18.193a.8.8 0 0 0 .243-.163l5-5a.75.75 0 1 0-1.06-1.06l-3.72 3.72V6.5a.75.75 0 0 0-1.5 0v9.19l-3.72-3.72a.75.75 0 0 0-1.06 1.06l5 5a.75.75 0 0 0 .817.163"
    />
  </svg>
)
export default ArrowDownOutlineIcon
