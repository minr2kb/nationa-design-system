import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const MagicFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="MagicFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="m12.967 18.645 1.22-4.258c.16-.58.62-1.03 1.2-1.2l4.258-1.22c.47-.14.47-.81 0-.94l-4.259-1.219c-.58-.16-1.03-.62-1.2-1.2l-1.22-4.258c-.139-.47-.809-.47-.939 0l-1.22 4.259c-.16.58-.62 1.03-1.199 1.2l-4.259 1.219c-.47.14-.47.81 0 .94l4.259 1.219c.58.16 1.03.62 1.2 1.2l1.22 4.258c.14.47.809.47.939 0M7.19 19.863l.49-1.7c.06-.23.25-.41.479-.48l1.699-.49c.19-.06.19-.33 0-.38l-1.699-.49a.7.7 0 0 1-.48-.48l-.49-1.7c-.06-.19-.329-.19-.379 0l-.49 1.7c-.06.23-.25.41-.479.48l-1.699.49c-.19.06-.19.33 0 .38l1.699.49c.23.06.41.25.48.48l.49 1.7c.06.19.329.19.379 0" />
    </g>
  </svg>
)
export default MagicFillIcon
