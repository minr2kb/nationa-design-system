import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const LoveitFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="LoveitFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      d="m12 19-1.16-.992a89 89 0 0 1-3.34-2.994q-1.32-1.26-2.1-2.26-.78-1.002-1.09-1.841A4.9 4.9 0 0 1 4 9.196q0-1.793 1.26-2.994T8.4 5q1.04 0 1.98.42T12 6.602a4.7 4.7 0 0 1 1.62-1.182A4.8 4.8 0 0 1 15.6 5q1.88 0 3.14 1.202Q20 7.402 20 9.196q0 .877-.31 1.717t-1.09 1.84q-.78 1.002-2.1 2.26-1.32 1.26-3.34 2.995z"
    />
  </svg>
)
export default LoveitFillIcon
