/** @jest-environment jsdom */
/* eslint-disable testing-library/prefer-screen-queries*/
/* eslint-disable testing-library/no-debugging-utils*/
/* eslint-disable testing-library/prefer-query-by-disappearance */
import { render, waitForElementToBeRemoved } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  it("should title render correctly", () => {
    const { getByText } = render(<App />);

    expect(getByText("Hello Jest")).toBeInTheDocument();
  });

  it("should have attribute", () => {
    const { getByText } = render(<App />);

    expect(getByText("Paragraph")).toHaveAttribute("class", "test");
  });

  it("should be able to add new item to the list", async () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    const addBtn = getByText("Add");

    const input = getByPlaceholderText("Novo item");

    await UserEvent.type(input, 'test')
    await UserEvent.setup().click(addBtn);

    expect(getByText("test")).toBeInTheDocument();

    // For API calls or any assinchronous operations use await expectation or use the native method waitFor.
    // expect(await findByText("test")).toBeInTheDocument();
  });

  it("should be able to remove item to the list", async () => {
    const { getByText, getAllByText } = render(<App />);

    const removeButtons = getAllByText("Remove");

    await UserEvent.click(removeButtons[0])

    await waitForElementToBeRemoved(() => {
      return getByText('MotherBoard')
    })
  });
});
