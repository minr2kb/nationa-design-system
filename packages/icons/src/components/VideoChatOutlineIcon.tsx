import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const VideoChatOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="VideoChatOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.143 4.286A2.57 2.57 0 0 0 2.57 6.857v10.286a2.57 2.57 0 0 0 2.572 2.571h10.286A2.57 2.57 0 0 0 18 17.143v-2.7l1.902 2.378a.857.857 0 0 0 1.526-.535V7.714a.857.857 0 0 0-1.526-.535L18 9.556V6.857a2.57 2.57 0 0 0-2.571-2.571zm11.143 7.71V6.858A.857.857 0 0 0 15.429 6H5.143a.857.857 0 0 0-.857.857v10.286c0 .473.383.857.857.857h10.286a.857.857 0 0 0 .857-.857v-5.146M8.143 9.858a2.143 2.143 0 1 1 4.286 0 2.143 2.143 0 0 1-4.286 0m-1.527 6.429c-.337 0-.616-.257-.616-.583v-.115c0-.751.417-1.445 1.094-1.838l.14-.082a6.15 6.15 0 0 1 6.102 0h.001l.14.082c.678.393 1.094 1.087 1.094 1.838v.115c0 .327-.282.577-.604.583z"
      clipRule="evenodd"
    />
  </svg>
)
export default VideoChatOutlineIcon
