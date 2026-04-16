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
      fillRule="evenodd"
      d="M5 10a5 5 0 1 1 10 0 5 5 0 0 1-10 0m5-7a7 7 0 1 0 4.2 12.6 1 1 0 0 0 .093.107l4 4a1 1 0 0 0 1.414-1.414l-4-4a1 1 0 0 0-.107-.093A7 7 0 0 0 10 3"
      clipRule="evenodd"
    />
  </svg>
)
export default SearchOutlineIcon
