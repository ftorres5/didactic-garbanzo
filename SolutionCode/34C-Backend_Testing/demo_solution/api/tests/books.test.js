const supertest = require("supertest");
const server = require("../../server");
const prisma = require("../../db/index");
const bcrypt = require("bcrypt");
const books = require("../../db/booksData");

describe("/api/books", () => {
  //setting global variables so we can use them throughout our tests
  let token;
  const test_user = {
    id: 123,
    username: "test",
    password: "password",
  };

  describe("GET /", () => {
    beforeEach(async () => {
      prisma.user.findUnique = jest.fn().mockResolvedValue(test_user);

      bcrypt.compare = jest.fn().mockResolvedValue(true);

      const res = await supertest(server).post("/api/auth/login").send({
        username: "test",
        password: "pass123",
      });

      token = res.body.token;
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("returns 200 status code when successful", async () => {
      prisma.book.findMany = jest.fn().mockResolvedValue(books);

      const res = await supertest(server).get("/api/books");

      expect(res.status).toBe(200);
    });

    it("returns list of books code when successful", async () => {
      prisma.book.findMany = jest.fn().mockResolvedValue(books);

      const res = await supertest(server).get("/api/books");

      expect(res.body).toHaveLength(books.length);
    });
  });

  describe("GET /:id", () => {
    beforeEach(async () => {
      prisma.user.findUnique = jest.fn().mockResolvedValue(test_user);

      bcrypt.compare = jest.fn().mockResolvedValue(true);

      const res = await supertest(server).post("/api/auth/login").send({
        username: "test",
        password: "pass123",
      });

      token = res.body.token;
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("returns 200 status code when successful", async () => {
      prisma.book.findUnique = jest
        .fn()
        .mockResolvedValue({ id: 123, ...books[0] });

      const res = await supertest(server).get("/api/books/123");

      expect(res.status).toBe(200);
    });

    it("returns book object when successful", async () => {
      prisma.book.findUnique = jest
        .fn()
        .mockResolvedValue({ id: 123, ...books[0] });

      const res = await supertest(server).get("/api/books/123");

      expect(res.body).toMatchObject({ id: 123, ...books[0] });
    });
  });

  describe("PUT /:id", () => {
    beforeEach(async () => {
      prisma.user.findUnique = jest.fn().mockResolvedValue(test_user);

      bcrypt.compare = jest.fn().mockResolvedValue(true);

      const res = await supertest(server).post("/api/auth/login").send({
        username: "test",
        password: "pass123",
      });

      token = res.body.token;
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("returns 200 status code when successful", async () => {
      prisma.book.update = jest.fn().mockResolvedValue({
        id: 123,
        ...books[0],
        available: false,
        userid: 123,
      });

      const res = await supertest(server)
        .put("/api/books/123")
        .set("Authorization", `Bearer ${token}`)
        .send({
          available: false,
        });

      expect(res.status).toBe(200);
    });

    it("returns updated book object when successful", async () => {
      prisma.book.update = jest.fn().mockResolvedValue({
        id: 123,
        ...books[0],
        available: false,
        userid: 123,
      });

      const res = await supertest(server)
        .put("/api/books/123")
        .set("Authorization", `Bearer ${token}`)
        .send({
          available: false,
        });

      expect(res.body).toMatchObject({
        id: 123,
        ...books[0],
        available: false,
      });
    });

    it("returns 401 status code when no token sent successful", async () => {
      const res = await supertest(server).put("/api/books/123").send({
        available: false,
      });

      expect(res.status).toBe(401);
    });

    it("returns 401 message when no token sent successful", async () => {
      const res = await supertest(server).put("/api/books/123").send({
        available: false,
      });

      expect(res.text).toBe("You must be logged in to do that.");
    });
  });
});
