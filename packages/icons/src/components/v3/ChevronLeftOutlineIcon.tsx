import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const ChevronLeftOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="ChevronLeftOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="m6.71 12 .848.847 6 6 .848.847 1.699-1.698-6-6 5.152-5.153.848-.847-1.7-1.7-.847.848-6 6-.847.848z"
    />
  </svg>
)
export default ChevronLeftOutlineIcon
