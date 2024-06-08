import type { Prisma, User } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String5225770',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2024-06-03T13:12:22.843Z',
      },
    },
    two: {
      data: {
        email: 'String5411334',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2024-06-03T13:12:22.843Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
