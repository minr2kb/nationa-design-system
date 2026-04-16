import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const MotionFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="MotionFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M14 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M10.033 12.744l.672-2.688L9 10.724V12a1 1 0 1 1-2 0v-1.958a1 1 0 0 1 .635-.93l3.569-1.4a3.02 3.02 0 0 1 3.499.957v.002l1.402 1.817 1.195-1.17a1 1 0 0 1 1.4 1.43l-2 1.957a1 1 0 0 1-1.492-.104l-.625-.81-.476 1.902 1.6 1.6A1 1 0 0 1 16 16v4a1 1 0 1 1-2 0v-3.586l-1.592-1.592-.74-.37-.698 2.79A1 1 0 0 1 10 18H7a1 1 0 1 1 0-2h2.22l.81-3.242z" />
    </g>
  </svg>
)
export default MotionFillIcon
