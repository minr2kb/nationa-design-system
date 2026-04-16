import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const ThumbsUpOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="ThumbsUpOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="m10.864 1.778 3.757 1.878.803.405-1.871 3.743H20.4v6h-.6v2.4h-.6v2.4h-.6v1.8h-8.059l-.217-.135-.51-.319-2.01-1.256v1.713h-5.4v-12.6H6.85l1.872-3.742q1.073-2.148 1.342-2.681l.806.401zM4.2 18.6H6v-9H4.2zm6.128-13.736L7.804 9.919v6.648l.562.353 2.4 1.5.293.184h5.745v-1.8h.6v-2.4h.6v-2.4h.6v-2.4h-7.958c.255-.514 1.047-2.093 2.366-4.736l-2.148-1.08z"
    />
  </svg>
)
export default ThumbsUpOutlineIcon
