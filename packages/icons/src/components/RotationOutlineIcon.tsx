import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const RotationOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="RotationOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      d="M5.5 11.17c0-.622.466-1.397 1.684-2.074C8.366 8.44 10.068 8 12 8s3.634.439 4.816 1.096c1.218.677 1.684 1.452 1.684 2.074 0 .448-.228.957-.817 1.473-.592.517-1.486.981-2.618 1.293a1 1 0 1 0 .53 1.928c1.338-.368 2.529-.95 3.405-1.717.878-.769 1.5-1.785 1.5-2.977 0-1.678-1.214-2.988-2.711-3.821C16.256 6.496 14.208 6 12 6s-4.256.496-5.789 1.349C4.714 8.182 3.5 9.492 3.5 11.17c0 1.32.764 2.422 1.797 3.221.831.643 1.898 1.143 3.094 1.474l-.428.428a1 1 0 1 0 1.414 1.414l2.08-2.08a1 1 0 0 0 .002-1.412l-2.08-2.09a1 1 0 1 0-1.418 1.41l.126.127a6.3 6.3 0 0 1-1.567-.853c-.739-.571-1.02-1.15-1.02-1.639"
    />
  </svg>
)
export default RotationOutlineIcon
