import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const InfinityOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="InfinityOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="M1 6.5h8.25l.33.44L12 10.168l2.42-3.228.33-.44H23v11h-8.25l-.33-.44L12 13.832 9.58 17.06l-.33.44H1zm9.625 5.5L8.15 8.7H3.2v6.6h4.95zm2.75 0 2.475 3.3h4.95V8.7h-4.95z"
    />
  </svg>
)
export default InfinityOutlineIcon
