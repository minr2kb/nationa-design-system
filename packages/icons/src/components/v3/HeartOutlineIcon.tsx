import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const HeartOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="HeartOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="M12 21S2.4 14.377 2.4 8.689C2.4 5.933 4.597 3.6 7.391 3.6c1.298 0 2.528.502 3.447 1.38.453.431.798.96 1.162 1.466.364-.506.709-1.035 1.162-1.466A5 5 0 0 1 16.61 3.6c2.797 0 4.991 2.333 4.991 5.089C21.6 14.377 12 21 12 21m0-11.482L9.979 6.724A3.191 3.191 0 0 0 4.2 8.595c0 1.249.562 2.423 1.219 3.458.798 1.263 1.897 2.516 3.045 3.644a39 39 0 0 0 3.15 2.768c.135.109.266.206.386.3.12-.094.248-.191.386-.3a38 38 0 0 0 3.15-2.767c1.148-1.13 2.243-2.386 3.045-3.65.657-1.034 1.223-2.204 1.223-3.457a3.191 3.191 0 0 0-5.779-1.871z"
    />
  </svg>
)
export default HeartOutlineIcon
