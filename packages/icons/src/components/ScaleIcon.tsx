import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const ScaleIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="ScaleIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      d="M20 5.015A.997.997 0 0 0 19 4h-4.37a1 1 0 1 0 0 2h1.956L6 16.586V14.62a1 1 0 1 0-2 0V19a.997.997 0 0 0 1 1h4.38a1 1 0 1 0 0-2H7.414L18 7.414V9.38a1 1 0 1 0 2 0z"
    />
  </svg>
)
export default ScaleIcon
