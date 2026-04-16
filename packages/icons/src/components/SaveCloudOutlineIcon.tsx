import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const SaveCloudOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="SaveCloudOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M14.74 12.3a.75.75 0 0 0-1.02-1.1l-2.19 2.027-1.29-1.197a.75.75 0 1 0-1.02 1.1l1.8 1.67a.75.75 0 0 0 1.02 0z" />
      <path
        fillRule="evenodd"
        d="M12 5C9.302 5 6.847 6.854 6.406 9.593 4.438 10.078 3 12.06 3 14.23 3 16.721 4.92 19 7.316 19h9.788C19.356 19 21 16.924 21 14.83c0-1.914-1.369-3.782-3.307-4.102C17.623 7.565 15.026 5 12 5m-3.664 5.48C8.336 8.498 9.986 7 12 7c1.926 0 3.694 1.703 3.694 3.86v1.82h1.41c.95 0 1.896.953 1.896 2.15 0 1.206-.953 2.17-1.896 2.17H7.316C6.236 17 5 15.839 5 14.23c0-1.602 1.209-2.75 2.336-2.75h1z"
        clipRule="evenodd"
      />
    </g>
  </svg>
)
export default SaveCloudOutlineIcon
