import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const ActionOulineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="ActionOulineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="M10.506 4h3v5.403l4.678-2.7 1.5 2.597-4.678 2.7 4.678 2.7-1.5 2.597-4.678-2.7V20h-3v-5.403l-4.678 2.7-1.5-2.597L9.006 12 4.328 9.3l1.5-2.597 4.678 2.7z"
    />
  </svg>
)
export default ActionOulineIcon
