import { MemoryRouter } from "react-router-dom";
import { render, screen, userEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import Home from "./index";

/**
 * Deve mostrar links para as páginas de exercício, 1 para cada dos 4 disponíveis.
 */

describe("Home", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Home />
    </MemoryRouter>
  );

  const link1 = screen.getByRole("exercise-link", { name: "exerciseone" });
  const link2 = screen.getByRole("exercise-link", { name: "exercisetwo" });
  const link3 = screen.getByRole("exercise-link", {
    name: "exercisethree",
  });
  const link4 = screen.getByRole("exercise-link", {
    name: "exercisefour",
  });

  it("should show four exercise links in home", () => {
    expect(link1).toBeInTheDocument();
    expect(link2).toBeInTheDocument();
    expect(link3).toBeInTheDocument();
    expect(link4).toBeInTheDocument();
  });
  it("should navigate to exercise one page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Home />
      </MemoryRouter>
    );

    act(() => {
      link1.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(screen.queryByText("Exercise One")).toBeInTheDocument();
  });
  it("should navigate to exercise two page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Home />
      </MemoryRouter>
    );

    act(() => {
      link2.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(screen.queryByText("Exercise Two")).toBeInTheDocument();
  });
  it("should navigate to exercise three page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Home />
      </MemoryRouter>
    );

    act(() => {
      link3.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(screen.queryByText("Exercise Three")).toBeInTheDocument();
  });
  it("should navigate to exercise four page", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Home />
      </MemoryRouter>
    );

    act(() => {
      link4.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(screen.queryByText("Exercise Four")).toBeInTheDocument();
  });
});
