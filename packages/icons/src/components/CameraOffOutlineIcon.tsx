import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const CameraOffOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="CameraOffOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path
        fillRule="evenodd"
        d="M3.293 4.626a1 1 0 0 1 1.414 0l1.707 1.707h1.172l1.707-1.707A1 1 0 0 1 10 4.333h4a1 1 0 0 1 .707.293l1.707 1.707H19c1.102 0 2 .898 2 2v10a2 2 0 0 1-.91 1.676l.617.617a1 1 0 0 1-1.414 1.414l-1.707-1.707H5c-1.102 0-2-.897-2-2v-10a2 2 0 0 1 .91-1.676l-.617-.617a1 1 0 0 1 0-1.414M5 8.333h.586l3.15 3.15a3.75 3.75 0 0 0-.486 1.85 3.746 3.746 0 0 0 3.75 3.75 3.74 3.74 0 0 0 1.852-.483l1.734 1.733H5zm7.721 7.136-2.854-2.855a2.3 2.3 0 0 0-.117.72 2.246 2.246 0 0 0 2.25 2.25q.383-.001.721-.115m-4.37-7.2 10.063 10.064H19v-10h-3a1 1 0 0 1-.707-.293l-1.707-1.707h-3.172L8.707 8.04a1 1 0 0 1-.356.23"
        clipRule="evenodd"
      />
      <path d="M15.95 13.863c.02-.18.05-.35.05-.53 0-2.21-1.79-4-4-4-.18 0-.36.03-.53.05z" />
    </g>
  </svg>
)
export default CameraOffOutlineIcon
