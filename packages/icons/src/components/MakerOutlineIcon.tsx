import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const MakerOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="MakerOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M10 14.58c0 .33.38.53.67.34l3.15-2.09c.25-.16.25-.52 0-.68l-3.15-2.09c-.28-.19-.67 0-.67.34z" />
      <path
        fillRule="evenodd"
        d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm3.75 0H5v10h14V7h-2.5l.5 2h-2.25l-.5-2h-1.5l.5 2H11l-.5-2H9l.5 2H7.25z"
        clipRule="evenodd"
      />
    </g>
  </svg>
)
export default MakerOutlineIcon
