const supertest = require("supertest");
const server = require("../../server");
const prisma = require("../../db/index");
const bcrypt = require("bcrypt");
const books = require("../../db/booksData");

describe("/api/auth", () => {
  //setting global variables so we can use them throughout our tests
  let token;
  const test_user = {
    id: 123,
    username: "test",
    password: "cowdays",
    email: "testuser@cowdays.com",
  };

  describe("POST /register", () => {
    //mocks the prisma.user.create function before each test
    beforeEach(() => {
      prisma.user.create = jest
        .fn()
        .mockResolvedValue({ ...test_user, id: 123 });
    });

    //clears all the mocks after each test
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("returns 201 status code when successful", async () => {
      const res = await supertest(server)
        .post("/api/auth/register")
        .send(test_user);

      expect(res.status).toBe(201);
    });

    it("returns a token when successful", async () => {
      const res = await supertest(server)
        .post("/api/auth/register")
        .send(test_user);

      expect(res.body.token).toBeTruthy();
    });
  });

  describe("POST /login", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    it("returns 200 when successful", async () => {
      prisma.user.findUnique = jest.fn().mockResolvedValue(test_user);

      bcrypt.compare = jest.fn().mockResolvedValue(true);

      const res = await supertest(server).post("/api/auth/login").send({
        username: test_user.username,
        password: test_user.password,
      });

      expect(res.status).toBe(200);
    });

    it("returns token when successful", async () => {
      prisma.user.findUnique = jest.fn().mockResolvedValue(test_user);

      bcrypt.compare = jest.fn().mockResolvedValue(true);

      const res = await supertest(server).post("/api/auth/login").send({
        username: test_user.username,
        password: test_user.password,
      });

      expect(res.body.token).toBeTruthy();
    });

    it("returns 401 when NOT successful", async () => {
      prisma.user.findUnique = jest.fn().mockResolvedValue(test_user);

      bcrypt.compare = jest.fn().mockResolvedValue(false);

      const res = await supertest(server).post("/api/auth/login").send({
        username: test_user.username,
        password: test_user.password,
      });

      expect(res.status).toBe(401);
    });

    it("returns error message when NOT successful", async () => {
      prisma.user.findUnique = jest.fn().mockResolvedValue(test_user);

      bcrypt.compare = jest.fn().mockResolvedValue(false);

      const res = await supertest(server).post("/api/auth/login").send({
        username: test_user.username,
        password: test_user.password,
      });

      expect(res.text).toBe("Invalid login credentials.");
    });
  });

  describe("GET /me", () => {
    beforeEach(async () => {
      prisma.user.findUnique = jest.fn().mockResolvedValue(test_user);

      bcrypt.compare = jest.fn().mockResolvedValue(true);

      const res = await supertest(server).post("/api/auth/login").send({
        username: test_user.username,
        password: test_user.password,
      });

      token = res.body.token;
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("returns 200 status code when successful", async () => {
      prisma.user.findUnique = jest.fn().mockResolvedValue(test_user);
      prisma.book.findMany = jest.fn().mockResolvedValue([books[0]]);

      const res = await supertest(server)
        .get("/api/auth/me")
        .set("Authorization", `Bearer ${token}`);

      expect(res.status).toBe(200);
    });

    it("returns a user object and the user books when successful", async () => {
      prisma.user.findUnique = jest.fn().mockResolvedValue(test_user);
      prisma.book.findMany = jest.fn().mockResolvedValue([books[0]]);

      const res = await supertest(server)
        .get("/api/auth/me")
        .set("Authorization", `Bearer ${token}`);

      expect(res.body).toHaveProperty("id");
      expect(res.body).toHaveProperty("username");
      expect(res.body).toHaveProperty("password");
      expect(res.body).toHaveProperty("email");
      expect(res.body).toHaveProperty("books");
    });

    it("returns 204 status code when NOT successful", async () => {
      const res = await supertest(server).get("/api/auth/me");

      expect(res.status).toBe(204);
    });

    it("returns no content code when NOT successful", async () => {
      const res = await supertest(server).get("/api/auth/me");

      expect(res.body).toEqual({});
    });
  });
});
