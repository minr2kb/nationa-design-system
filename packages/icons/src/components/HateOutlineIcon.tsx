import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const HateOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="HateOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.8 6.579c-.659 0-1.248.408-1.48 1.024l-1.69 4.511a.8.8 0 0 0-.051.277v.504c0 .436.353.79.79.79h3.947a.79.79 0 0 1 .756 1.015l-.495 1.65c-.24.8.186 1.641.955 1.93l2.054-3.423a.79.79 0 0 1 .677-.383h3.158V6.579zm-2.958.47A3.16 3.16 0 0 1 8.8 5h9.412a.79.79 0 0 1 .789.79v9.473a.79.79 0 0 1-.79.79h-3.5l-2.138 3.564a.79.79 0 0 1-.894.353l-.456-.13a3.16 3.16 0 0 1-2.157-3.944l.19-.633H6.368A2.37 2.37 0 0 1 4 12.895v-.503c0-.284.051-.566.15-.832z"
      clipRule="evenodd"
    />
  </svg>
)
export default HateOutlineIcon
