import type { Prisma, Event } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: {
      data: {
        name: 'String',
        date: '2024-06-08T17:29:04.141Z',
        updatedAt: '2024-06-08T17:29:04.141Z',
      },
    },
    two: {
      data: {
        name: 'String',
        date: '2024-06-08T17:29:04.141Z',
        updatedAt: '2024-06-08T17:29:04.141Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Event, 'event'>
