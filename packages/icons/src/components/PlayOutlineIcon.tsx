import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const PlayOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="PlayOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17.958 12 7.5 6.074v11.852zM8.24 4.77l10.457 5.925a1.5 1.5 0 0 1 0 2.61L8.24 19.231A1.5 1.5 0 0 1 6 17.926V6.074A1.5 1.5 0 0 1 8.24 4.77"
      clipRule="evenodd"
    />
  </svg>
)
export default PlayOutlineIcon
