import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const LocationOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="LocationOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M12.707 3.293a1 1 0 0 0-1.414 0l-2.34 2.34a1 1 0 0 0 1.414 1.414L11 6.414V9a1 1 0 1 0 2 0V6.414l.633.633a1 1 0 0 0 1.414-1.414zM7.047 10.367a1 1 0 1 0-1.414-1.414l-2.34 2.34a1 1 0 0 0 0 1.414l2.34 2.34a1 1 0 0 0 1.414-1.414L6.414 13H9a1 1 0 1 0 0-2H6.414zM10.367 16.953a1 1 0 0 0-1.414 1.414l2.34 2.34a1 1 0 0 0 1.414 0l2.34-2.34a1 1 0 0 0-1.414-1.414l-.633.633V15a1 1 0 1 0-2 0v2.585zM16.953 8.953a1 1 0 0 1 1.414 0l2.34 2.34a1 1 0 0 1 0 1.414l-2.34 2.34a1 1 0 0 1-1.414-1.414l.633-.633H15a1 1 0 1 1 0-2h2.586l-.633-.633a1 1 0 0 1 0-1.414" />
    </g>
  </svg>
)
export default LocationOutlineIcon
