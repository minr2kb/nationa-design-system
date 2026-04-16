import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const LightbulbFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="LightbulbFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="M15.6 15.836A7.202 7.202 0 0 0 12 2.4a7.202 7.202 0 0 0-3.6 13.436v.964h7.2zm0 2.764H8.4v3.6h7.2zm-3.9-12A2.7 2.7 0 0 0 9 9.3v.3H7.2v-.3c0-2.486 2.014-4.5 4.5-4.5h.3v1.8z"
    />
  </svg>
)
export default LightbulbFillIcon
