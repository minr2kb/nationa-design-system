import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const ChatFillIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="ChatFillIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.115 5.549c1.79-1.324 4.227-2.12 6.885-2.12s5.095.796 6.885 2.12 2.972 3.214 2.972 5.367-1.182 4.044-2.972 5.368c-1.719 1.272-4.033 2.056-6.567 2.117-1.25 1.127-3.566 2.585-7.362 2.06a.775.775 0 0 1-.324-1.423c.262-.17.74-.676.928-1.262.089-.275.104-.536.035-.778-.068-.236-.234-.522-.624-.823-1.71-1.317-2.828-3.164-2.828-5.259 0-2.153 1.182-4.043 2.972-5.367"
      clipRule="evenodd"
    />
  </svg>
)
export default ChatFillIcon
