import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const ThumbsDownFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="ThumbsDownFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="M18.6 3.6V6h1.2v2.4h.6v3h.6v4.2h-7.8l1.8 3.6-3.6 1.8-3-5.4V6L12 3.6zM6.6 6v12H2.4V6z"
    />
  </svg>
)
export default ThumbsDownFillIcon
