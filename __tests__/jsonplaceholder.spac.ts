import nock from 'nock';
import getUsers  from "../src/gradway/jsonplaceholder" ;

describe("Test call api 3th pratry", () => {
  it("Component test with Mock server", async () => {
    nock("https://jsonplaceholder.cypress.io")
      .defaultReplyHeaders({ "access-control-allow-origin": "*" })
      .get("/users")
      .reply(200, [{}, {}, {}]);
    const response = await getUsers();
    expect(response.data.length).toEqual(3);
  });

  it("Component test with 404", async () => {
    nock("https://jsonplaceholder.cypress.io")
      .defaultReplyHeaders({ "access-control-allow-origin": "*" })
      .get("/users")
      .reply(500);
    const response = await getUsers();
    expect(response.code).toEqual(404);
  });

});