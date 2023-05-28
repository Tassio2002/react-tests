/** @jest-environment jsdom */
/* eslint-disable testing-library/prefer-screen-queries*/
/* eslint-disable testing-library/no-debugging-utils*/
import { render } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import SearchPage from "./SearchPage";
// caso o usuário não digite nada deve-se lançar um erro
// caso o usuario tenha recebido o erro mas depois faça uma pesquisa válida o erro deverá sumir
// quando o usuário faz a pesquisa a imagem deve aparecer, testar o elemento e a requisição
describe("ListPage component", () => {
  it("should render", () => {
    const { getByText } = render(<SearchPage />);

    expect(getByText("Search Car")).toBeInTheDocument();
  });

  it("shold render error message", async () => {
    const { getByText } = render(<SearchPage />);

    const searchBtn = getByText("Search");
    //const errorMessage = "Digite algo no campo de pesquisa";

    await UserEvent.setup().click(searchBtn);

    expect(getByText("Digite algo no campo de pesquisa")).toBeInTheDocument();
  });
});
