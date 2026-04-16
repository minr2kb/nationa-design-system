import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const EditorOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="EditorOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M3 6c0-1.102.898-2 2-2h14c1.102 0 2 .898 2 2v4a1 1 0 1 1-2 0V6h-2.5l.5 2h-2.25l-.5-2h-1.5l.5 2H11l-.5-2H9l.5 2H7.25l-.5-2H5v10h6a1 1 0 1 1 0 2H5c-1.102 0-2-.898-2-2z" />
      <path d="M16.215 12.458v-2.47A.99.99 0 0 0 15.227 9a.99.99 0 0 0-.988.988v2.47z" />
      <path
        fillRule="evenodd"
        d="M14.24 15.226h-3.252a1 1 0 1 1 0-2h6.21a2.236 2.236 0 1 1 .18 2h-1.163v1.144a2.235 2.235 0 1 1-1.976-.176zm4.802-1.178a.235.235 0 1 1 .47 0 .235.235 0 0 1-.47 0m-3.993 3.994a.235.235 0 1 0 0 .47.235.235 0 0 0 0-.47"
        clipRule="evenodd"
      />
    </g>
  </svg>
)
export default EditorOutlineIcon
