import { SelectOption } from '../SelectInput.types'
import { ChipContainer, ChipItem } from './Chip.styles'
import { ChipProps } from './Chip.types'

export const MultiChip = ({ selected, options }: ChipProps) => {
  return (
    <ChipContainer>
      {(selected as string[] | number[])?.map((value: string | number) => {
        const label = options?.find(
          (option: SelectOption) => option.value === value,
        )?.label
        return label ? <ChipItem key={`chip-${value}`} label={label} /> : null
      })}
    </ChipContainer>
  )
}
