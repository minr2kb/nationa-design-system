import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const DeleteOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="DeleteOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="M9 1.8h6l.6 1.8h4.8V6H3.6V3.6h4.8zm-4.2 6h14.4v13.8H4.8zM9 10.2H7.2v9H9zm3.9 0h-1.8v9h1.8zm3.9 0H15v9h1.8z"
    />
  </svg>
)
export default DeleteOutlineIcon
