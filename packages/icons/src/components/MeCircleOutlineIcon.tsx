import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const MeCircleOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="MeCircleOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M6.245 8.794h1.333l1.92 4.703 1.92-4.703h1.333v6.412h-1.122v-4.153l-1.684 4.145H9.05l-1.683-4.134v4.142H6.245zM14.781 9.83v1.647h2.735v1.029h-2.735v1.663h2.975v1.037h-4.14V8.794h4.105V9.83z" />
      <path
        fillRule="evenodd"
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0m-1.5 0a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0"
        clipRule="evenodd"
      />
    </g>
  </svg>
)
export default MeCircleOutlineIcon
