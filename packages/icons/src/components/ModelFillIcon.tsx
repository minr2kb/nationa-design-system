import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const ModelFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="ModelFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0M4 9a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2h-4v10a1 1 0 1 1-2 0v-5h-2v5a1 1 0 1 1-2 0V10H5a1 1 0 0 1-1-1" />
    </g>
  </svg>
)
export default ModelFillIcon
