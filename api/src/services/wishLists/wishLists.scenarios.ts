import type { Prisma, WishList } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WishListCreateArgs>({
  wishList: {
    one: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2024-06-08T17:31:09.746Z',
        user: {
          create: {
            email: 'String9000698',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-06-08T17:31:09.746Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-06-08T17:31:09.746Z',
            updatedAt: '2024-06-08T17:31:09.746Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2024-06-08T17:31:09.746Z',
        user: {
          create: {
            email: 'String1931776',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-06-08T17:31:09.746Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2024-06-08T17:31:09.746Z',
            updatedAt: '2024-06-08T17:31:09.746Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<WishList, 'wishList'>
