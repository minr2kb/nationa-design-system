import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const PlayFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="PlayFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      d="M18.697 10.695 8.24 4.769A1.5 1.5 0 0 0 6 6.074v11.852a1.5 1.5 0 0 0 2.24 1.305l10.457-5.926a1.5 1.5 0 0 0 0-2.61"
    />
  </svg>
)
export default PlayFillIcon
