import client from "axios";

class UserResponse {
  code: number;
  data: any;
  constructor(code: number, data = "default value") {
    this.code = code;
    this.data = data;
  }
}

async function getUsers() {
  try {
    const result = await client({
      method: "get",
      url: "https://jsonplaceholder.cypress.io/users",
    });
    return new UserResponse(200, result.data);
  } catch (error) {
    return new UserResponse(404, error.messaage);
  }
}

export default getUsers;