import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const ChatFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="ChatFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="M1.2 1.2h14.4v12.6H9l-4.2 3v-3H1.2zm7.2 18.6v-3.36l1.178-.84H17.4V7.2h5.4v12.6h-3.6v3l-4.2-3z"
    />
  </svg>
)
export default ChatFillIcon
