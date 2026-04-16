import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const UndoOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="UndoOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      d="M9.207 5.707a1 1 0 0 0-1.414-1.414l-3.5 3.5a1 1 0 0 0 0 1.414l3.5 3.5a1 1 0 0 0 1.414-1.414L7.414 9.5h6.336a4.25 4.25 0 1 1 0 8.5H5a1 1 0 1 0 0 2h8.75A6.25 6.25 0 0 0 20 13.75a6.25 6.25 0 0 0-6.25-6.25H7.414z"
    />
  </svg>
)
export default UndoOutlineIcon
