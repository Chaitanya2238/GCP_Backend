const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create a user
  const user = await prisma.user.create({
    data: {
      name: 'Alice Gupta',
      email: 'alice@example.com',
    },
  });

  // Create a project for that user
  const project = await prisma.project.create({
    data: {
      repoName: 'github-cloner',
      repoUrl: 'https://github.com/example/github-cloner',
      userId: user.id, // links to the user above
    },
  });

  console.log('User:', user);
  console.log('Project:', project);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
