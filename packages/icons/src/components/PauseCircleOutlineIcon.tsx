import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const PauseCircleOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="PauseCircleOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 4.636a7.364 7.364 0 1 0 0 14.728 7.364 7.364 0 0 0 0-14.728M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m7.773-4.09v8.18H9.136V7.91zm4.09 0v8.18h-1.636V7.91z"
    />
  </svg>
)
export default PauseCircleOutlineIcon
