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
      fillOpacity={0.9}
      d="m11.162 21.25.847.847.848-.847 6-6 .847-.848-1.699-1.698-4.8 4.8V2.402h-2.4v15.102q-4.725-4.726-4.8-4.8l-1.698 1.698.847.848 6 6z"
    />
  </svg>
)
export default ArrowDownOutlineIcon
