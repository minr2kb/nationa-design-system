import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const QuestionCircleOutlineIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    name="QuestionCircleOutlineIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <g fill="currentColor">
      <path d="M13.891 7.92a2.91 2.91 0 0 0-2.368-.627l-.008.002-.008.001a4 4 0 0 0-.338.086l-.01.003-.012.003c-1.131.37-1.897 1.37-1.897 2.51v.107a.75.75 0 0 0 1.5 0v-.107c0-.439.296-.894.853-1.08.085-.025.142-.04.184-.048a1.4 1.4 0 0 1 1.13.292c.425.371.436.909.074 1.28l-.002.003-.533.552c-.11.114-.215.213-.325.317l-.032.03a5 5 0 0 0-.365.369c-.258.295-.475.673-.475 1.203V13a.75.75 0 0 0 1.5 0v-.184c0-.062.005-.103.106-.218.061-.07.142-.149.262-.262l.034-.031c.107-.102.238-.225.374-.366l.532-.552c.981-1.01.888-2.542-.169-3.46zM13.02 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
      <path
        fillRule="evenodd"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m0-1.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15"
        clipRule="evenodd"
      />
    </g>
  </svg>
)
export default QuestionCircleOutlineIcon
