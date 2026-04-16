import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const RecreateOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="RecreateOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="M21.6 9.6V2.1l-2.963 2.963c-3.76-3.6-9.727-3.552-13.425.15a9.58 9.58 0 0 0-2.808 7.042 9.587 9.587 0 0 0 2.809 6.533A9.57 9.57 0 0 0 12 21.6a9.6 9.6 0 0 0 8.58-5.291l-2.145-1.08A7.2 7.2 0 0 1 12 19.196a7.21 7.21 0 0 1-6.818-4.875 7.2 7.2 0 0 1-.378-2.073q-.005-.126-.004-.255a7.2 7.2 0 0 1 12.139-5.239L14.1 9.6z"
    />
  </svg>
)
export default RecreateOutlineIcon
