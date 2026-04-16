import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const EditOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="EditOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.93 5.414a2 2 0 0 1 2.829 0l.827.827a2 2 0 0 1 0 2.828l-1.628 1.628-3.655-3.655zm1.415.991-.637.637 1.25 1.25.636-.637zm-3.677 1.273 3.655 3.655-8.668 8.666L4.001 20 4 16.345zM5.7 17.048v1.25h1.25l6.966-6.965-1.25-1.25z"
      clipRule="evenodd"
    />
  </svg>
)
export default EditOutlineIcon
