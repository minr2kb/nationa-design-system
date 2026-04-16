import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const MyAssetOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="MyAssetOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M10 12a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" />
      <path
        fillRule="evenodd"
        d="M4 7.52a1.97 1.97 0 0 0 1 1.714v8.719C5 19.051 5.86 20 7 20h10c1.146 0 2-.966 2-2.047V9.234c.593-.34 1-.972 1-1.714V5.98C20 4.868 19.086 4 18 4H6c-1.086 0-2 .868-2 1.98zm3 10.433V9.5h10v8.453a.07.07 0 0 1-.016.047H7.013l-.007-.012A.1.1 0 0 1 7 17.953M6 6v1.5h12V6z"
        clipRule="evenodd"
      />
    </g>
  </svg>
)
export default MyAssetOutlineIcon
