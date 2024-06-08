import type { Prisma, Pairing } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PairingCreateArgs>({
  pairing: {
    one: {
      data: {
        updatedAt: '2024-06-08T17:30:16.894Z',
        event: {
          create: {
            name: 'String',
            date: '2024-06-08T17:30:16.894Z',
            updatedAt: '2024-06-08T17:30:16.894Z',
          },
        },
        santa: {
          create: {
            email: 'String5905288',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-06-08T17:30:16.894Z',
          },
        },
        person: {
          create: {
            email: 'String1218414',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-06-08T17:30:16.894Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2024-06-08T17:30:16.894Z',
        event: {
          create: {
            name: 'String',
            date: '2024-06-08T17:30:16.894Z',
            updatedAt: '2024-06-08T17:30:16.894Z',
          },
        },
        santa: {
          create: {
            email: 'String7010451',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-06-08T17:30:16.894Z',
          },
        },
        person: {
          create: {
            email: 'String4139466',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2024-06-08T17:30:16.894Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pairing, 'pairing'>
