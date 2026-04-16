import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const SearchFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="SearchFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      d="M10 3a7 7 0 1 0 4.2 12.6 1 1 0 0 0 .093.107l4 4a1 1 0 0 0 1.414-1.414l-4-4a1 1 0 0 0-.107-.093A7 7 0 0 0 10 3"
    />
  </svg>
)
export default SearchFillIcon
