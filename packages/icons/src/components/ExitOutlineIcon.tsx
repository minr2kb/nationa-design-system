import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const ExitOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="ExitOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      d="M5 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.412A1.93 1.93 0 0 1 5 3h6a1 1 0 1 1 0 2H5v14h6a1 1 0 1 1 0 2zm11.725-4.725a.999.999 0 0 1-1.412-1.413L17.175 13H10a1 1 0 1 1 0-2h7.175l-1.862-1.862a.999.999 0 0 1 1.412-1.413l3.568 3.568a1 1 0 0 1 0 1.414z"
    />
  </svg>
)
export default ExitOutlineIcon
