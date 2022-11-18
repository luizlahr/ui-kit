import type { Meta, StoryObj } from '@storybook/react'
import { Box, Grid as GridComponent, GridProps, Text } from '@luizlahr-ui/react'

export default {
  title: 'Layout/Grid',
  component: GridComponent,
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
  argTypes: {
    container: {
      description: 'boolean',
    },
    spacing: {
      control: {
        type: 'array',
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: (
      <>
        <GridComponent xs={3}>
          <Text
            css={{
              backgroundColor: '$grey4',
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            Col 1 (xs=3)
          </Text>
        </GridComponent>
        <GridComponent xs={3}>
          <Text
            css={{
              backgroundColor: '$grey4',
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            Col 2 (xs=3)
          </Text>
        </GridComponent>
        <GridComponent xs={3}>
          <Text
            css={{
              backgroundColor: '$grey4',
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            Col 3 (xs=3)
          </Text>
        </GridComponent>
        <GridComponent xs={3}>
          <Text
            css={{
              backgroundColor: '$grey4',
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            Col 4 (xs=3)
          </Text>
        </GridComponent>
        <GridComponent xs={4}>
          <Text
            css={{
              backgroundColor: '$grey4',
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            Col 5 (xs=4)
          </Text>
        </GridComponent>
        <GridComponent xs={4}>
          <Text
            css={{
              backgroundColor: '$grey4',
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            Col 6 (xs=4)
          </Text>
        </GridComponent>
        <GridComponent xs={4}>
          <Text
            css={{
              backgroundColor: '$grey4',
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            Col 7 (xs=4)
          </Text>
        </GridComponent>
      </>
    ),
  },
} as Meta<GridProps>

export const Grid: StoryObj<GridProps> = {
  args: {
    container: true,
    spacing: 2,
  },
}
