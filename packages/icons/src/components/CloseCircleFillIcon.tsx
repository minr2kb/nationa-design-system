import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const CloseCircleFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="CloseCircleFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M8.434 8.434a.8.8 0 0 1 1.132 0L12 10.869l2.434-2.434a.8.8 0 0 1 1.132 1.13L13.132 12l2.434 2.434a.8.8 0 1 1-1.132 1.131L12 13.131l-2.434 2.435a.8.8 0 0 1-1.132-1.131L10.87 12 8.434 9.565a.8.8 0 0 1 0-1.131"
      clipRule="evenodd"
    />
  </svg>
)
export default CloseCircleFillIcon
