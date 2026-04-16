import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const ArrowUpOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="ArrowUpOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="m11.162 3.25.847-.848.848.848 6 6 .847.847-1.699 1.7q-.073-.075-4.8-4.8v15.1h-2.4v-15.1l-4.8 4.8-1.698-1.7.847-.847 6-6z"
    />
  </svg>
)
export default ArrowUpOutlineIcon
