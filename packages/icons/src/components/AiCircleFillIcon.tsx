import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const AiCircleFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="AiCircleFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M10.792 8.625h-.761L7.5 15.375h1.334l.595-1.745h2.641l.595 1.745h1.334l-2.535-6.75h-.672m0 1.254h-.084l-.962 2.82h2.007zM16.5 8.625h-1.275v6.75H16.5z"
      clipRule="evenodd"
    />
  </svg>
)
export default AiCircleFillIcon
