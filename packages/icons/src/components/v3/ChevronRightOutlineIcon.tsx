import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const ChevronRightOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="ChevronRightOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="m16.105 12-.848.847-6 6-.847.847-1.7-1.698 6-6-5.152-5.153-.847-.847 1.699-1.7.847.848 6 6 .848.848z"
    />
  </svg>
)
export default ChevronRightOutlineIcon
