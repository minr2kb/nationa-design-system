import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const EllipsisOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="EllipsisOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="M14.098 3.602h-4.2v4.2h4.2zm-4.2 6.3v4.2h4.2v-4.2zm0 6.3v4.2h4.2v-4.2z"
    />
  </svg>
)
export default EllipsisOutlineIcon
