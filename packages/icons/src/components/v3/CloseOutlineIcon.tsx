import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const CloseOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="CloseOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity={0.9}
      d="M6.859 5.153 6.01 4.3 4.312 6l.848.848L10.313 12 5.16 17.153 4.312 18l1.7 1.699.847-.852L12.01 13.7l5.149 5.149.851.85L19.706 18l-.847-.848L13.706 12l5.153-5.152.847-.848-1.695-1.699-.851.851-5.149 5.15z"
    />
  </svg>
)
export default CloseOutlineIcon
