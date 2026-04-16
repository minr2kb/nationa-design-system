import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const CheckCircleFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="CheckCircleFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m3.94-10.756a.75.75 0 1 0-1.13-.988l-3.42 3.909-2.246-2.156a.75.75 0 1 0-1.038 1.082l2.812 2.7a.75.75 0 0 0 1.084-.047z"
      clipRule="evenodd"
    />
  </svg>
)
export default CheckCircleFillIcon
