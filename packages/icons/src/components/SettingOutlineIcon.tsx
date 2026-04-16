import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const SettingOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="SettingOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.166 4.211c-.853.2-1.653.537-2.377.985l-.856-.514a1.64 1.64 0 0 0-2.251 2.25l.514.858a8 8 0 0 0-.985 2.376l-.968.243a1.64 1.64 0 0 0 0 3.182l.968.243c.2.853.537 1.653.986 2.377l-.514.856a1.64 1.64 0 0 0 2.25 2.25l.857-.513a8 8 0 0 0 2.376.985l.243.968a1.64 1.64 0 0 0 3.182 0l.243-.968a8 8 0 0 0 2.377-.985l.856.514a1.64 1.64 0 0 0 2.251-2.251l-.514-.857a8 8 0 0 0 .985-2.376l.968-.243a1.64 1.64 0 0 0 0-3.182l-.968-.243a8 8 0 0 0-.986-2.377l.514-.856a1.64 1.64 0 0 0-2.25-2.25l-.857.513a8 8 0 0 0-2.376-.985l-.243-.968a1.64 1.64 0 0 0-3.182 0zM6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0m3 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0"
      clipRule="evenodd"
    />
  </svg>
)
export default SettingOutlineIcon
