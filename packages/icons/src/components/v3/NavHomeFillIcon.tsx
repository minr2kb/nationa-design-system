import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const NavHomeFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="NavHomeFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path fill="currentColor" fillOpacity={0.9} d="M12.75 21H21V9l-9-8-9 8v12h8.25v-6.25a.75.75 0 1 1 1.5 0z" />
  </svg>
)
export default NavHomeFillIcon
