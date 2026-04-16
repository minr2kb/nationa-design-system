import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const VideoFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="VideoFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path fill="currentColor" fillOpacity={0.9} d="M16.8 4.8H2.4v14.4h14.4zm6 13.2V6l-4.2 2.801v6.402l4.2 2.8z" />
  </svg>
)
export default VideoFillIcon
