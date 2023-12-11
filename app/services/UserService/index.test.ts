import { createUser } from "./index";
import type { RegisterUserForm } from "../AuthService/schemas";

// TODO: resolve ~/utils/prisma alias error
describe("createUser", () => {
  it("should create a new user", async () => {
    const mockUser: RegisterUserForm = {
      email: "test@example.com",
      password: "password123",
      fullName: "Test User",
    };

    const createdUser = await createUser(mockUser);

    expect(createdUser.id).toBeDefined();
    expect(createdUser.email).toEqual(mockUser.email);
  });
});
