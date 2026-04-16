import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const SendFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="SendFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12.689 20.239c.446.777 1.573.715 1.849-.102l4.638-13.76c.272-.805-.535-1.612-1.34-1.34L4.076 9.675c-.817.276-.88 1.404-.102 1.85L7.98 13.82c.36.207.797.186 1.113-.052l4.301-3.242c.186-.14.434.109.294.294l-3.242 4.3a1.01 1.01 0 0 0-.052 1.115z"
      clipRule="evenodd"
    />
  </svg>
)
export default SendFillIcon
