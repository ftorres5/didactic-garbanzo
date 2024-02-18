const { PrismaClient } = require("@prisma/client");
const { faker } = require("@faker-js/faker");
const books = require("../db/booksData");

const prisma = new PrismaClient();

async function main() {
  //seed users
  console.log("Creating Initial User Data...");
  await Promise.all(
    [...Array(5)].map(() =>
      prisma.user.create({
        data: {
          username: faker.internet.userName(),
          password: faker.internet.password(),
          email: faker.internet.email(),
        },
      })
    )
  );

  console.log("Creating Initial Book Data...");
  //seed books
  for (let i = 0; i < books.length; i++) {
    const { title, author, description, coverImage, available } = books[i];

    await prisma.book.create({
      data: {
        title,
        author,
        description,
        coverImage,
        available,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    return e;
  });
