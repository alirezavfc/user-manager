import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { UserList } from "./UserList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getUsers } from "../services/userApi";

vi.mock("../services/userApi", () => ({
  getUsers: vi.fn(),
}));

describe("UserList", () => {
  it("displays users", async () => {
    vi.mocked(getUsers).mockResolvedValue([
      { id: 1, name: "Ali", email: "ali@example.com" },
    ]);

    const queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false },
      },
    });

    render(
      <QueryClientProvider client={queryClient}>
        <UserList />
      </QueryClientProvider>,
    );

    expect(await screen.findByText("Ali")).toBeInTheDocument();
    expect(screen.getByText("ali@example.com")).toBeInTheDocument();
  });
});
