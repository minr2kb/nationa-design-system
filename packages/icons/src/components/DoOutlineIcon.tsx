import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const DoOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="DoOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      d="M16.207 4.293a1 1 0 1 0-1.414 1.414L16.586 7.5H10.25A6.25 6.25 0 0 0 4 13.75 6.25 6.25 0 0 0 10.25 20H19a1 1 0 1 0 0-2h-8.75a4.25 4.25 0 1 1 0-8.5h6.336l-1.793 1.793a1 1 0 0 0 1.414 1.414l3.5-3.5a1 1 0 0 0 0-1.414z"
    />
  </svg>
)
export default DoOutlineIcon
