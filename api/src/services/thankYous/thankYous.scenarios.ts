import type { Prisma, ThankYou } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ThankYouCreateArgs>({
  thankYou: {
    one: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2024-06-08T17:32:07.548Z',
            updatedAt: '2024-06-08T17:32:07.548Z',
          },
        },
        user: {
          create: {
            email: 'String3078759',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-06-08T17:32:07.548Z',
          },
        },
        toUser: {
          create: {
            email: 'String4382760',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-06-08T17:32:07.548Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2024-06-08T17:32:07.549Z',
            updatedAt: '2024-06-08T17:32:07.549Z',
          },
        },
        user: {
          create: {
            email: 'String433543',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-06-08T17:32:07.549Z',
          },
        },
        toUser: {
          create: {
            email: 'String5274566',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-06-08T17:32:07.549Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ThankYou, 'thankYou'>
