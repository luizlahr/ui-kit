import { colors } from '@luizlahr-ui/tokens'

export const getColorString = (color: string): string => {
  if (color.substring(0, 1) === '$') {
    console.log(color.substring(1))
    console.log(colors[color.substring(1)])
    return colors[color.substring(1)]
  }
  return color
}
