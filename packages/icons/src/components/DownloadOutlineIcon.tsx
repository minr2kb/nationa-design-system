import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const DownloadOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="DownloadOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M12 5a1 1 0 0 1 1 1v5.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L11 11.586V6a1 1 0 0 1 1-1" />
      <path d="M6 16.01a1 1 0 1 0-2 0V18c0 .985.728 2.01 1.88 2.01h12.24c1.169 0 1.88-1.033 1.88-2.01v-1.99a1 1 0 1 0-2 0v2H6v-2" />
    </g>
  </svg>
)
export default DownloadOutlineIcon
