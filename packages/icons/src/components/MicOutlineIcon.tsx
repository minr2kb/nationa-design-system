import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const MicOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="MicOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12 14.632q-1.25 0-2.125-.921T9 11.474V5.158q0-1.316.875-2.237T12 2t2.125.921T15 5.158v6.316q0 1.316-.875 2.236-.875.922-2.125.922M11 22v-3.237q-2.6-.369-4.3-2.447a7.33 7.33 0 0 1-1.642-3.844c-.065-.549.39-.998.942-.998s.989.45 1.082.995a5.14 5.14 0 0 0 1.38 2.728q1.463 1.54 3.538 1.54t3.537-1.54a5.14 5.14 0 0 0 1.381-2.728c.093-.544.53-.995 1.082-.995s1.007.45.942.998a7.33 7.33 0 0 1-1.642 3.844q-1.7 2.078-4.3 2.447V22zm1-9.474q.424 0 .713-.302.287-.303.287-.75V5.158q0-.447-.287-.75A.94.94 0 0 0 12 4.105q-.424 0-.713.303a1.05 1.05 0 0 0-.287.75v6.316q0 .447.287.75.288.302.713.302"
    />
  </svg>
)
export default MicOutlineIcon
