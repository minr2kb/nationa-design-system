import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const PlayCircleOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="PlayCircleOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.5 12a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m1.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0M9.652 16.067 16.696 12 9.652 7.933z"
      clipRule="evenodd"
    />
  </svg>
)
export default PlayCircleOutlineIcon
