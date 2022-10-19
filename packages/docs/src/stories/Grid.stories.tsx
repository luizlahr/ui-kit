import type { Meta, StoryObj } from '@storybook/react'
import { Grid, GridProps, Text } from '@luizlahr-ui/react'

export default {
  title: 'Surface/Grid',
  component: Grid,
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
        <Grid xs={3}>
          <Text
            css={{ display: 'flex', width: '100%', justifyContent: 'center' }}
          >
            Col 1 (xs=3)
          </Text>
        </Grid>
        <Grid xs={3}>
          <Text
            css={{ display: 'flex', width: '100%', justifyContent: 'center' }}
          >
            Col 2 (xs=3)
          </Text>
        </Grid>
        <Grid xs={3}>
          <Text
            css={{ display: 'flex', width: '100%', justifyContent: 'center' }}
          >
            Col 3 (xs=3)
          </Text>
        </Grid>
        <Grid xs={3}>
          <Text
            css={{ display: 'flex', width: '100%', justifyContent: 'center' }}
          >
            Col 4 (xs=3)
          </Text>
        </Grid>
        <Grid xs={4}>
          <Text
            css={{ display: 'flex', width: '100%', justifyContent: 'center' }}
          >
            Col 5 (xs=4)
          </Text>
        </Grid>
        <Grid xs={4}>
          <Text
            css={{ display: 'flex', width: '100%', justifyContent: 'center' }}
          >
            Col 6 (xs=4)
          </Text>
        </Grid>
        <Grid xs={4}>
          <Text
            css={{ display: 'flex', width: '100%', justifyContent: 'center' }}
          >
            Col 7 (xs=4)
          </Text>
        </Grid>
      </>
    ),
  },
} as Meta<GridProps>

export const Default: StoryObj<GridProps> = {
  args: {
    container: true,
    spacing: [2, 4],
  },
}
