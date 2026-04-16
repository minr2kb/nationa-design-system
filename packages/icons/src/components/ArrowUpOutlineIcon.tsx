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
      d="M11.713 5.807a.8.8 0 0 0-.243.163l-5 5a.75.75 0 1 0 1.06 1.06l3.72-3.72v9.19a.75.75 0 0 0 1.5 0V8.31l3.72 3.72a.75.75 0 1 0 1.06-1.06l-5-5a.75.75 0 0 0-.817-.163"
    />
  </svg>
)
export default ArrowUpOutlineIcon
