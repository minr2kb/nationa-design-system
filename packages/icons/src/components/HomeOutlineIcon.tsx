import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const HomeOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="HomeOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m18 9.97-6-4.563L6 9.97v9.127h12zM4.4 8.652c-.252.191-.4.492-.4.811v10.648c0 .56.448 1.014 1 1.014h14c.552 0 1-.454 1-1.014V9.463c0-.32-.148-.62-.4-.811l-7-5.324a.99.99 0 0 0-1.2 0z"
      clipRule="evenodd"
    />
  </svg>
)
export default HomeOutlineIcon
