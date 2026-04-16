import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const LikeFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="LikeFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.428 4.383a.79.79 0 0 1 .894-.353l.456.13a3.16 3.16 0 0 1 2.157 3.944l-.19.633h2.887A2.37 2.37 0 0 1 20 11.105v.503c0 .284-.051.566-.15.832l-1.692 4.51A3.16 3.16 0 0 1 15.2 19H5.789A.79.79 0 0 1 5 18.21V8.737a.79.79 0 0 1 .79-.79h3.5z"
      clipRule="evenodd"
    />
  </svg>
)
export default LikeFillIcon
