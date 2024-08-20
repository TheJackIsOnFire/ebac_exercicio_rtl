import { fireEvent, render, screen } from "@testing-library/react";
import Post from "./index ";

//Cria uma switch
describe("Test for the Post component", () => {
  //Testa a renderização do elemento Post
  it("Must render the component correctly", () => {
    render(<Post />);

    //Verifica se o texto comentar esta no documento
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  //Testar se adiciona dois comentarios
  it("Must add two comments", () => {
    render(<Post />);

    // Adiciona o primeiro comentário
    //Captura o disparo do evento por meio do data-testid
    fireEvent.change(screen.getByTestId("comment-textarea"), {
      target: {
        value: "Primeiro comentário: Teste",
      },
    });
    //Captura o evento de click pelo id do botão
    fireEvent.click(screen.getByTestId("comment-button"));

    // adiciona o segundo comentário
    fireEvent.change(screen.getByTestId("comment-textarea"), {
      target: {
        value: "Segundo comentário: Teste",
      },
    });
    //Captura o evento de click pelo id do botão
    fireEvent.click(screen.getByTestId("comment-button"));

    //Verifica se os dois comentarios estão em tela
    expect(screen.getAllByTestId("comment-element")).toHaveLength(2);
  });
});
