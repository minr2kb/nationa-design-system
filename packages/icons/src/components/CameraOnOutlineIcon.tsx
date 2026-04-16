import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const CameraOnOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="CameraOnOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
      <path d="M9.293 4.293A1 1 0 0 1 10 4h4a1 1 0 0 1 .707.293L16.414 6H19c1.102 0 2 .898 2 2v10c0 1.102-.898 2-2 2H5c-1.102 0-2-.898-2-2V8c0-1.102.898-2 2-2h2.586zM10.414 6 8.707 7.707A1 1 0 0 1 8 8H5v10h14V8h-3a1 1 0 0 1-.707-.293L13.586 6z" />
      <path d="M12 10.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.25 13a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0" />
    </g>
  </svg>
)
export default CameraOnOutlineIcon
