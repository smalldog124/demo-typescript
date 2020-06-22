import supertest from "supertest";
import server from "../src/app";

const request = supertest(server);

describe('test api get book', () => {
  it("Get all users /api/users", async (done) => {
    const response = await request.get("/book");
    expect(response.status).toBe(200);
    expect(response.body.length).toBe(1);
    done();
  });
})