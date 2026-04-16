import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const UserFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="UserFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8.25 8a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0m-1.74 6.743a10.84 10.84 0 0 1 10.98 0h.001l.25.15c1.238.735 2.009 2.04 2.009 3.46v.21c0 .689-.584 1.187-1.21 1.187H5.46c-.647 0-1.21-.509-1.21-1.188v-.209c0-1.42.77-2.724 2.008-3.46l.25-.15z"
      clipRule="evenodd"
    />
  </svg>
)
export default UserFillIcon
