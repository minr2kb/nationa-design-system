import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const AssetStoreOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="AssetStoreOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 7v-.002A3.995 3.995 0 0 1 12 3c2.212 0 4 1.786 4 3.998V7h1.437c.928 0 1.817.681 1.888 1.7v.006l.658 10.215c.166 1.171-.807 2.079-1.876 2.079H5.893c-1.069 0-2.042-.908-1.876-2.08l.658-10.218C4.745 7.663 5.645 7 6.563 7zm2-.002C10 5.892 10.892 5 12 5s2 .892 2 1.998V7h-4zM6.66 9l-.644 10h11.968L17.34 9z"
      clipRule="evenodd"
    />
  </svg>
)
export default AssetStoreOutlineIcon
