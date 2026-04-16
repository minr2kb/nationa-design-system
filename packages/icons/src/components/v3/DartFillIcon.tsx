import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const DartFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="DartFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="M21 3 1 10l7.807 4.132 4.914-4.91a.75.75 0 0 1 1.061 1.06l-4.914 4.91L14 23z"
    />
  </svg>
)
export default DartFillIcon
