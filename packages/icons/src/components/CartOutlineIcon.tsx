import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const CartOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="CartOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M2 4a1 1 0 0 1 1-1h1.149c.973 0 1.815.698 1.976 1.676v.002L6.345 6h12.154a2 2 0 0 1 1.86 2.736l-.002.005-1.198 2.996v.002A2 2 0 0 1 17.298 13H7.512l.332 1.995v.002l.003.002.002.001H17.99a1 1 0 1 1 0 2H7.846a2.01 2.01 0 0 1-1.976-1.675L4.152 5.004 4.15 5H2.999a1 1 0 0 1-1-1m5.178 7H17.3v-.001l1.198-2.995v-.001L18.5 8H6.679zm1.817 8.5a1.5 1.5 0 1 1-2.999.001 1.5 1.5 0 0 1 3-.001m9.994 0a1.5 1.5 0 1 1-3 .001 1.5 1.5 0 0 1 3-.001"
      clipRule="evenodd"
    />
  </svg>
)
export default CartOutlineIcon
