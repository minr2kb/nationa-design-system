import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const CanvasOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="CanvasOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M6.009 5.999h4.253a1 1 0 1 0 0-2H5.888a1.88 1.88 0 0 0-1.88 1.879v4.374a1 1 0 1 0 2 0zM13.748 4.009a1 1 0 0 0 0 2h4.254v4.253a1 1 0 1 0 2 0V5.888a1.88 1.88 0 0 0-1.88-1.88zM19.992 13.748a1 1 0 0 0-2 0V18h-4.254a1 1 0 1 0 0 2h4.375a1.88 1.88 0 0 0 1.879-1.879zM5.999 13.738a1 1 0 1 0-2 0v4.374a1.88 1.88 0 0 0 1.879 1.88h4.374a1 1 0 1 0 0-2H6z" />
    </g>
  </svg>
)
export default CanvasOutlineIcon
