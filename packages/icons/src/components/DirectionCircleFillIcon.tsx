import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const DirectionCircleFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="DirectionCircleFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m.633-13.64a.633.633 0 1 0-1.265 0v3.544l-3.07-1.772a.633.633 0 0 0-.633 1.096L10.735 12l-3.07 1.772a.633.633 0 1 0 .633 1.096l3.07-1.772v3.545a.633.633 0 1 0 1.265 0v-3.545l3.07 1.772a.633.633 0 1 0 .632-1.096L13.265 12l3.07-1.772a.633.633 0 1 0-.633-1.096l-3.069 1.772z"
      clipRule="evenodd"
    />
  </svg>
)
export default DirectionCircleFillIcon
