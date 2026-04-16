import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const LockOffOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="LockOffOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path
        fillRule="evenodd"
        d="M12 3a5 5 0 0 0-4.33 2.5l1.73 1A3 3 0 0 1 15 8v1H6.75C5.687 9 5 9.923 5 10.833v8.334C5 20.077 5.687 21 6.75 21h10.5c1.063 0 1.75-.922 1.75-1.833v-8.334C19 9.923 18.313 9 17.25 9H17V8a5 5 0 0 0-5-5m-5 8v8h10v-8z"
        clipRule="evenodd"
      />
      <path d="M13.5 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
    </g>
  </svg>
)
export default LockOffOutlineIcon
