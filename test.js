const { PrismaClient } = require('@prisma/client');
const { customAlphabet } = require('nanoid');

const prisma = new PrismaClient();
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10); // 10-character ID

async function main() {
  const customId = `user_${nanoid()}`;

  const user = await prisma.user.create({
    data: {
      id: customId,
      name: 'Alice Gupta',
      email: 'alice@example.com',
      isVerified: true,
      lastLogin: new Date(),
    },
  });

  console.log('Created User:', user);
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
