import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const DiscordFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="DiscordFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      d="M17.554 7.156a13.7 13.7 0 0 0-3.301-.974 9 9 0 0 0-.423.825 12.8 12.8 0 0 0-3.664 0 9 9 0 0 0-.422-.825 13.7 13.7 0 0 0-3.304.977c-2.089 2.966-2.655 5.858-2.372 8.709a13.5 13.5 0 0 0 4.048 1.95q.493-.636.867-1.341a9 9 0 0 1-1.365-.626q.173-.121.335-.242a9.85 9.85 0 0 0 4.047.868c1.4 0 2.781-.296 4.047-.867q.165.129.335.241a9 9 0 0 1-1.368.627q.374.706.867 1.34a13.5 13.5 0 0 0 4.051-1.949c.332-3.306-.568-6.172-2.378-8.713m-8.212 6.959c-.789 0-1.44-.688-1.44-1.533s.628-1.538 1.438-1.538 1.456.693 1.442 1.538-.636 1.532-1.44 1.532m5.316 0c-.79 0-1.44-.688-1.44-1.533s.63-1.538 1.44-1.538 1.452.693 1.438 1.538-.634 1.532-1.438 1.532"
    />
  </svg>
)
export default DiscordFillIcon
