/** 숫자 문자열 → `'${n}px'` */
export const toPixel = (value: string) => `${value}px`

/** 숫자 문자열 → `'${n/16}rem'` */
export const toRem = (value: string) => `${Number(value) / 16}rem`
