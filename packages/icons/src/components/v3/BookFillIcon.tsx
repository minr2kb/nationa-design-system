import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const BookFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="BookFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="M18 2.4H3.6v19.2h16.8v-2.4h-1.2v-2.4h1.2V2.4zM7.2 16.8h9.6v2.4H6V18c0-.664.536-1.2 1.2-1.2m1.2-9.6h8.4V9H8.4zm8.4 3.6v1.8H8.4v-1.8z"
    />
  </svg>
)
export default BookFillIcon
