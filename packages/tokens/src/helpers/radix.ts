export const renameRadixColor = (
  prefix: string,
  colorObject: Record<string, string>,
) => {
  let colors: { [key: string]: string } = {}
  Object.entries(colorObject).forEach(([, color], index) => {
    colors = { ...colors, [`${prefix}${index + 1}`]: color }
  })

  return colors
}
