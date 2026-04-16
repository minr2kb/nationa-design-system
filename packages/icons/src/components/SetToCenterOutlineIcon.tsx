import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const SetToCenterOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="SetToCenterOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
      <path
        fillRule="evenodd"
        d="M13 4a1 1 0 1 0-2 0v1.07A7.005 7.005 0 0 0 5.07 11H4a1 1 0 1 0 0 2h1.07A7 7 0 0 0 11 18.93V20a1 1 0 1 0 2 0v-1.07A7 7 0 0 0 18.93 13H20a1 1 0 1 0 0-2h-1.07A7 7 0 0 0 13 5.07zm-1 13a5 5 0 1 1 0-10 5 5 0 0 1 0 10"
        clipRule="evenodd"
      />
    </g>
  </svg>
)
export default SetToCenterOutlineIcon
