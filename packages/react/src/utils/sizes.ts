export const getSizeString = (
  size: string | number | undefined,
  defaultValue?: string | number,
): string | number | undefined => {
  if (typeof size === 'number') {
    return size
  }

  if (typeof size === 'undefined') {
    return defaultValue !== null ? defaultValue : size
  }

  const number = Number(String(size).substring(1))
  if (size.substring(0, 1) === '$' && !isNaN(number)) {
    return `${number * 4}px`
  }
  return size
}
