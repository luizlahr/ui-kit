import { MenuItem, Select } from '@mui/material'
import { globalCss, styled } from '../../styles'

export const PopoverStyles = globalCss({
  '.MuiPopover-root > .MuiPaper-root.MuiMenu-paper': {
    backgroundColor: '$input-popover-background-color',
    color: '$input-popover-text-color',

    fontFamily: 'default',
    fontSize: '$sm',
    fontWeight: '$regular',

    '.MuiButtonBase-root.MuiMenuItem-root': {
      '&:hover': {
        backgroundColor: '$grey7',
      },

      '&.Mui-selected': {
        backgroundColor: '$primary10',
        color: '$grey9',

        '&:disabled': {
          color: 'yellow',
        },

        '&:hover': {
          backgroundColor: '$primary9',
        },
      },
    },
  },
})

export const SelectInputContainer = styled(Select, {
  '&.MuiInputBase-root': {
    position: 'relative',
    cursor: 'text',
    fontFamily: '$default',
    fontWeight: 'normal',
    fontSize: 'md',
    color: '$grey4',
    boxSizing: 'border-box',
    borderRadius: '$sm',
    height: '$10',
    backgroundColor: '$input-default-background-color',

    '&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
      borderColor: '$primary10',
    },

    '&.Mui-disabled fieldset.MuiOutlinedInput-notchedOutline': {
      borderColor: '$input-disabled-border-color',
    },

    '&.Mui-disabled': {
      opacity: '$input-disabled-opacity',
      backgroundColor: '$input-disabled-background-color',
    },

    '&>.MuiSelect-select.Mui-disabled': {
      cursor: 'not-allowed',
    },

    '&>.MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input.Mui-disabled':
      {
        color: '$input-disabled-text-color',
        '-webkit-text-fill-color': '$grey5',
      },

    'svg.MuiSelect-icon': {
      color: '$grey5',
    },
  },
})

export const Option = styled(MenuItem, {})
