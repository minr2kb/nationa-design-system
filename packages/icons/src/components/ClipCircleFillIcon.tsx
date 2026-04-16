import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const ClipCircleFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="ClipCircleFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m1.656-13.305-2.807 2.645a3 3 0 0 0-.862 1.493L9.1 15.586c-.171.724.703 1.229 1.244.719l2.807-2.645a3 3 0 0 0 .862-1.493l.887-3.753c.171-.724-.703-1.229-1.244-.719"
      clipRule="evenodd"
    />
  </svg>
)
export default ClipCircleFillIcon
