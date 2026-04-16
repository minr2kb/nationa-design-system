import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const ThumbsUpFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="ThumbsUpFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="m8.4 8.4 3-5.4L15 4.8l-1.8 3.6H21v4.2h-.6v3h-.6V18h-1.2v2.4H12L8.4 18zm-1.8 0v12H2.4v-12z"
    />
  </svg>
)
export default ThumbsUpFillIcon
