/** @jest-environment jsdom */
/* eslint-disable testing-library/prefer-screen-queries*/
/* eslint-disable testing-library/no-debugging-utils*/
import { render, screen, waitFor } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import SearchPage from "./SearchPage";

describe("ListPage component", () => {
  it("should render", () => {
    const { getByText } = render(<SearchPage />);

    expect(getByText("Search Car")).toBeInTheDocument();
  });

  it("shold render error message", async () => {
    const { getByText } = render(<SearchPage />);

    const searchBtn = getByText("Search");
    const errorMessage = "Digite algo no campo de pesquisa";

    await UserEvent.setup().click(searchBtn);

    expect(getByText(errorMessage)).toBeInTheDocument();
  });

  it("shold remove error message", async () => {
    const { getByText, getByPlaceholderText } = render(<SearchPage />);

    const searchInput = getByPlaceholderText("Search here..");
    const searchBtn = getByText("Search");
    const errorMessage = "Digite algo no campo de pesquisa";

    await UserEvent.setup().click(searchBtn);
    await UserEvent.type(searchInput, "fusca");
    await UserEvent.setup().click(searchBtn);

    await waitFor(() => {
      expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
    });
  });

  it("should render image", async () => {
    const { getByText, getByPlaceholderText } = render(<SearchPage />);
    const searchInput = getByPlaceholderText("Search here..");
    const searchBtn = getByText("Search");

    await UserEvent.type(searchInput, "fusca");
    await UserEvent.setup().click(searchBtn);
    // eslint-disable-next-line testing-library/no-node-access
    const image = document.querySelector("img") as HTMLImageElement;

    await waitFor(() => {
      expect(image.src).toContain("https");
    });
  });
});
