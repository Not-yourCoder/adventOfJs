import type { Prisma, UserStatus } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserStatusCreateArgs>({
  userStatus: {
    one: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String8528726',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-06-03T13:13:02.510Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-06-03T13:13:02.510Z',
            updatedAt: '2024-06-03T13:13:02.510Z',
          },
        },
      },
    },
    two: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String6389887',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-06-03T13:13:02.510Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-06-03T13:13:02.510Z',
            updatedAt: '2024-06-03T13:13:02.510Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserStatus, 'userStatus'>
