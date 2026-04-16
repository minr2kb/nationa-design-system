import type { SVGProps } from 'react'
type IconProps = SVGProps<SVGSVGElement> & {
  size?: number,
}
const LoadingIcon = ({ size = 24, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 24 24"
    name="LoadingIcon"
    strokeWidth="0"
    width={size}
    height={size}
    {...props}
  >
    <path fill="currentColor" d="M0 0h24v24H0z" />
    <defs>
      <pattern id="a" patternContentUnits="objectBoundingBox">
        <use xlinkHref="#b" transform="scale(.00667)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAAXNSR0IArs4c6QAAAthJREFUeF7t1jEOgzAABEH8/0c7okgXDCbablLjK1YTzDj8FAgKjGDTpAIHWBAkBcBKshoFi4GkAFhJVqNgMZAUACvJahQsBpICYCVZjYLFQFIArCSrUbAYSAqAlWQ1ChYDSQGwkqxGwWIgKQBWktUoWAwkBcBKshoFi4GkAFhJVqNgMZAUACvJahQsBpICYCVZjYLFQFIArCSrUbAYSAqAlWQ1ChYDSQGwkqxGwWIgKQBWktUoWAwkBcBKshoFi4GkAFhJVqNgMZAUACvJahSsGwNzzvnrkTGGdot24iziXKH6HoHrOh5YF23uUJ3HwAJr+6PnCSy4wAJru8B/B1yFf1yF3ljeWNt/vydXoW8ssLZhnQfucIEF1itYK1xQrZP6xnpNzsFVAbD4SAqAlWQ1ChYDSQGwkqxGwWIgKQBWktUoWAwkBcBKshoFi4GkAFhJVqNgMZAUACvJahQsBpICYCVZjYLFQFIArCSrUbAYSAqAlWQ1ChYDSQGwkqxGwWIgKQBWktUoWAwkBcBKshoFi4GkAFhJVqNgMZAUACvJahQsBpICYCVZjYLFQFIArCSrUbAYSAqAlWQ1ChYDSQGwkqxGwWIgKQBWktUoWAwkBcBKshoFi4GkAFhJVqNgMZAUACvJahQsBpICYCVZjYLFQFIArCSrUbAYSAqAlWQ1ChYDSQGwkqxGwWIgKQBWktUoWAwkBcBKshoFi4GkAFhJVqNgMZAUACvJahQsBpICYCVZjYLFQFIArCSrUbAYSAqAlWQ1ChYDSQGwkqxGwWIgKQBWktUoWAwkBcBKshoFi4GkAFhJVqNgMZAUACvJahQsBpICYCVZjYLFQFIArCSrUbAYSAqAlWQ1ChYDSQGwkqxGwWIgKQBWktUoWAwkBcBKshoFi4GkAFhJVqNgMZAUACvJahQsBpICYCVZjYLFQFIArCSrUbAYSAqAlWQ1ChYDSQGwkqxGP9VqJJeTK21IAAAAAElFTkSuQmCC"
        id="b"
        preserveAspectRatio="none"
      />
    </defs>
  </svg>
)
export default LoadingIcon
