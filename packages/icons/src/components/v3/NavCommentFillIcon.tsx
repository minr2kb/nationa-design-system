import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const NavCommentFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="NavCommentFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="M7 3h16v14l-4.5-3V8.25a.75.75 0 0 0-.75-.75h-6a.75.75 0 1 0 0 1.5H17v11H9.5L5 23v-3H1V9h6z"
    />
  </svg>
)
export default NavCommentFillIcon
