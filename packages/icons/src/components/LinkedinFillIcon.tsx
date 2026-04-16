import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const LinkedinFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="LinkedinFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      d="M18.857 4C19.464 4 20 4.536 20 5.179v13.678A1.15 1.15 0 0 1 18.857 20H5.107C4.5 20 4 19.5 4 18.857V5.18C4 4.536 4.5 4 5.107 4zM8.821 17.714v-7.607H6.464v7.607zM7.643 9.036C8.393 9.036 9 8.429 9 7.679s-.607-1.393-1.357-1.393c-.786 0-1.393.643-1.393 1.393s.607 1.357 1.393 1.357m10.071 8.678v-4.178c0-2.036-.464-3.643-2.857-3.643-1.143 0-1.928.643-2.25 1.25h-.036v-1.036h-2.25v7.607h2.358v-3.75c0-1 .178-1.964 1.428-1.964 1.214 0 1.214 1.143 1.214 2v3.714z"
    />
  </svg>
)
export default LinkedinFillIcon
