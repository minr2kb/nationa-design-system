import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const SendFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="SendFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path fill="currentColor" fillOpacity={0.9} d="M5.55 10.909 1.8 1.8 24 12 1.8 22.2l3.75-9.109L13.2 12z" />
  </svg>
)
export default SendFillIcon
