import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const RemoveOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="RemoveOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M14 9a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1M11 10a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0z" />
      <path
        fillRule="evenodd"
        d="M10 3h4a1 1 0 0 1 1 1v1h4a1 1 0 1 1 0 2v11.09c0 1.658-1.395 2.91-3 2.91H8c-1.609 0-3-1.265-3-2.91V7a1 1 0 0 1 0-2h4V4a1 1 0 0 1 1-1M7 7v11.09c0 .455.409.91 1 .91h8c.595 0 1-.448 1-.91V7z"
        clipRule="evenodd"
      />
    </g>
  </svg>
)
export default RemoveOutlineIcon
