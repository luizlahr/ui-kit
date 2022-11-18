import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  media,
  radii,
  space,
  opacities,
  zIndices,
} from '@luizlahr-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
    opacity: 'opacities',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    media,
    opacities,
    radii,
    space,
    zIndices,
  },
})
