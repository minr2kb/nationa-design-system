import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const ClipCircleOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="ClipCircleOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19.5 12a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m1.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-7.346-4.301L10.85 10.34a3 3 0 0 0-.862 1.493l-.886 3.75c-.171.723.703 1.228 1.244.718l2.804-2.643a3 3 0 0 0 .862-1.493l.886-3.749c.171-.724-.703-1.229-1.244-.718"
      clipRule="evenodd"
    />
  </svg>
)
export default ClipCircleOutlineIcon
