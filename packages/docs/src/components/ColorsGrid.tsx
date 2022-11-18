import { colors } from '@luizlahr-ui/tokens'
import { getContrast, parseToRgb, toColorString } from 'polished'

export function ColorsGrid() {
  const colorsList = Object.entries(colors)
  let newColor: string

  return colorsList?.map(([key, color]) => {
    if (color.startsWith('$')) {
      const reference = color.substring(1)
      newColor = toColorString(parseToRgb(colors?.[reference]))
    } else {
      newColor = toColorString(parseToRgb(color))
    }

    return (
      <div key={key} style={{ backgroundColor: newColor, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(newColor, '#FFF') < 3.5 ? '#000' : '#FFF',
          }}
        >
          <strong>${key}</strong>
          <span></span>
          <span>
            {newColor}
            {color.substring(-1, 1) === '$' ? ` - (${color})` : ''}
          </span>
        </div>
      </div>
    )
  })
}
