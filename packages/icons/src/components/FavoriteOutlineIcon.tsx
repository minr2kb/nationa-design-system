import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const FavoriteOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="FavoriteOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M11.723 4.336a.301.301 0 0 1 .554 0l1.976 4.674.176.416.45.039 5.095.442a.301.301 0 0 1 .17.527l-3.852 3.341-.342.296.103.44 1.148 4.965a.302.302 0 0 1-.449.326l-4.364-2.633-.388-.235-.388.235-4.364 2.633a.302.302 0 0 1-.45-.326l1.15-4.965.102-.44-.342-.296-3.853-3.34a.301.301 0 0 1 .171-.528l5.095-.442.45-.04.176-.415z"
    />
  </svg>
)
export default FavoriteOutlineIcon
