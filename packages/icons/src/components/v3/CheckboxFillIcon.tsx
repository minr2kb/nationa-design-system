import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const CheckboxFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="CheckboxFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="M20.4 20.4H3.6V3.6h16.8zM15.169 8.063 10.69 14.22 8.1 11.629 6.829 12.9l3.334 3.334.742.746.619-.851L16.62 9.12l.529-.727-1.455-1.062-.529.728z"
    />
  </svg>
)
export default CheckboxFillIcon
