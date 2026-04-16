import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const ArrowLeftOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="ArrowLeftOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      d="M5.807 12.287q.054.133.163.243l5 5a.75.75 0 1 0 1.06-1.06l-3.72-3.72h9.19a.75.75 0 0 0 0-1.5H8.31l3.72-3.72a.75.75 0 0 0-1.06-1.06l-5 5a.75.75 0 0 0-.163.817"
    />
  </svg>
)
export default ArrowLeftOutlineIcon
