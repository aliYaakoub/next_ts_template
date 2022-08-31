import { PrismaClient } from '@prisma/client';

// Docs about instantiating `PrismaClient` with Next.js:
// https://pris.ly/d/help/next-js-best-practices

let prisma: PrismaClient;

// to prevent creating a new prisma client every time
// in development we store it in the global object
// and check if it exist, if it does we use it,
// otherwise we create it.

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // @ts-expect-error it shalt be global.prisma
  if (!global.prisma) {
    // @ts-expect-error it shalt be global.prisma
    global.prisma = new PrismaClient();
  }
  // @ts-expect-error it shalt be global.prisma
  prisma = global.prisma;
}

export default prisma;
