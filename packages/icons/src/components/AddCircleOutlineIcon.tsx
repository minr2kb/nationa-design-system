import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const AddCircleOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="AddCircleOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M12 16.75a.75.75 0 0 1-.75-.75v-3.25H8a.75.75 0 1 1 0-1.5h3.25V8a.75.75 0 0 1 1.5 0v3.25H16a.75.75 0 0 1 0 1.5h-3.25V16a.75.75 0 0 1-.75.75" />
      <path
        fillRule="evenodd"
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-1.5 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0"
        clipRule="evenodd"
      />
    </g>
  </svg>
)
export default AddCircleOutlineIcon
