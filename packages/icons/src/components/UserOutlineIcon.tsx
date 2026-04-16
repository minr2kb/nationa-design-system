import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const UserOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="UserOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.677 7.871a2.323 2.323 0 1 1 4.645 0 2.323 2.323 0 0 1-4.645 0M11.999 4a3.871 3.871 0 1 0 0 7.742A3.871 3.871 0 0 0 12 4M7.123 16.164v-.001a9.64 9.64 0 0 1 9.754 0l.257.153.001.001c.798.474 1.277 1.279 1.314 2.135H5.551c.037-.857.516-1.661 1.314-2.135h.001zm10.544-1.333a11.19 11.19 0 0 0-11.334 0l-.001.001-.258.154C4.796 15.746 4 17.091 4 18.558v.216c0 .7.58 1.226 1.25 1.226h13.5c.648 0 1.25-.514 1.25-1.226v-.216c0-1.466-.796-2.812-2.074-3.572l-.257-.154z"
      clipRule="evenodd"
    />
  </svg>
)
export default UserOutlineIcon
