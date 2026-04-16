import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const CloseCircleOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="CloseCircleOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M15.566 8.434a.8.8 0 0 1 0 1.132L13.13 12l2.435 2.434a.8.8 0 0 1-1.132 1.132L12 13.13l-2.434 2.435a.8.8 0 0 1-1.132-1.132L10.87 12 8.434 9.566a.8.8 0 1 1 1.132-1.132L12 10.87l2.434-2.435a.8.8 0 0 1 1.132 0" />
      <path
        fillRule="evenodd"
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-1.5 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0"
        clipRule="evenodd"
      />
    </g>
  </svg>
)
export default CloseCircleOutlineIcon
