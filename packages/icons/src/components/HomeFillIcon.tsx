import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const HomeFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="HomeFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.595 3.132a.685.685 0 0 1 .81 0l7.272 5.241a.8.8 0 0 1 .323.65v11.194c0 .433-.326.783-.727.783H4.727C4.326 21 4 20.65 4 20.217V9.023a.8.8 0 0 1 .323-.65z"
      clipRule="evenodd"
    />
  </svg>
)
export default HomeFillIcon
