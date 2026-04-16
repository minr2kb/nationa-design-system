import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const HeartFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="HeartFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="M7.391 3.6c1.601 0 3.109.769 4.047 2.066l.562.776.563-.776A4.992 4.992 0 0 1 21.6 8.591c-.001 5.13-5.757 9.758-9.601 12.409-3.844-2.651-9.6-7.279-9.6-12.409A4.99 4.99 0 0 1 7.391 3.6"
    />
  </svg>
)
export default HeartFillIcon
