import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const BackgroundOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="BackgroundOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M16.54 17H7.42l.01-.01c-.38 0-.6-.4-.37-.68l1.81-2.25c.19-.24.57-.23.75.02l1.11 1.56c.18.25.56.26.75.02l2-2.49c.18-.22.53-.23.72-.01l2.7 3.15c.24.28.02.69-.36.69" />
      <path
        fillRule="evenodd"
        d="M6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2h12v12H6z"
        clipRule="evenodd"
      />
    </g>
  </svg>
)
export default BackgroundOutlineIcon
