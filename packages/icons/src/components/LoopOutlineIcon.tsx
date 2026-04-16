import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const LoopOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="LoopOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M13.953 4.462a1 1 0 0 0-1.406-1.424l-2.5 2.47a1 1 0 0 0 0 1.422l2.5 2.47a1 1 0 0 0 1.406-1.424l-.711-.702c2.406.36 4.258 2.45 4.258 4.996a5.06 5.06 0 0 1-1.973 4.02 1 1 0 0 0 1.22 1.585A7.06 7.06 0 0 0 19.5 12.27c0-3.668-2.777-6.688-6.345-7.02zM10.039 20.955a1 1 0 0 1 .008-1.414l.538-.53C7.143 18.558 4.5 15.596 4.5 12.018a7.06 7.06 0 0 1 2.753-5.605A1 1 0 1 1 8.473 8a5.06 5.06 0 0 0-1.973 4.02c0 2.66 2.023 4.823 4.587 5.034l-1.04-1.027a1 1 0 0 1 1.406-1.423l2.5 2.469a1 1 0 0 1 0 1.423l-2.5 2.469a1 1 0 0 1-1.414-.009" />
    </g>
  </svg>
)
export default LoopOutlineIcon
