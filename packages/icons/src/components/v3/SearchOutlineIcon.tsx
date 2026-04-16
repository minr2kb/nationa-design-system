import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const SearchOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="SearchOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="M18.011 10.2a7.8 7.8 0 0 1-1.5 4.601l4.748 4.751.847.848-1.695 1.699-.851-.852-4.747-4.747A7.76 7.76 0 0 1 10.21 18a7.8 7.8 0 0 1-7.8-7.8c0-4.309 3.492-7.8 7.8-7.8 4.309 0 7.8 3.491 7.8 7.8m-7.8 5.4c2.982 0 5.4-2.419 5.4-5.4s-2.418-5.4-5.4-5.4a5.4 5.4 0 0 0-5.4 5.4c0 2.981 2.419 5.4 5.4 5.4"
    />
  </svg>
)
export default SearchOutlineIcon
