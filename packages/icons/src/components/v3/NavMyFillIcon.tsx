import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const NavMyFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="NavMyFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="M12 22c5.521 0 10-4.479 10-10S17.521 2 12 2 2 6.479 2 12s4.479 10 10 10M8.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M14 9.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M7.75 13h4.5v1.5H8.536A3.5 3.5 0 0 0 15.5 14v-.25H17V14a5 5 0 0 1-10 0v-.25a.75.75 0 0 1 .75-.75"
    />
  </svg>
)
export default NavMyFillIcon
