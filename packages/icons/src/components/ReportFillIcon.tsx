import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const ReportFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="ReportFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m10.68 13.455-3.055.982v4.435a.813.813 0 0 1-1.625 0V6.075c0-.345.219-.653.545-.767l3.1-1.08a4.11 4.11 0 0 1 4.502 1.243 2.485 2.485 0 0 0 2.92.673l.788-.353A.812.812 0 0 1 19 6.532v7.77c0 .303-.168.58-.436.72l-.323.169a4.04 4.04 0 0 1-4.969-.987 2.42 2.42 0 0 0-2.591-.749"
      clipRule="evenodd"
    />
  </svg>
)
export default ReportFillIcon
