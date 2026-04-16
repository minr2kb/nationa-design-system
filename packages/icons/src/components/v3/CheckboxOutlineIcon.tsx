import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const CheckboxOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="CheckboxOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path fill="currentColor" fillOpacity={0.9} d="M18.6 5.4v13.2H5.4V5.4zM5.4 3.6H3.6v16.8h16.8V3.6z" />
  </svg>
)
export default CheckboxOutlineIcon
