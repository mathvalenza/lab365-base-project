import { verificaPalavraNoTexto } from "../../src/exercicios/exercicio-7";

describe("testes da função verificaPalavraNoTexto", () => {
  it("deve retornar informe um texto quando o param texto não for informado", () => {
    expect(verificaPalavraNoTexto(null, "algumaPalavra")).toBe(
      "informe um texto"
    );
  });

  it("deve retornar informe uma palavra quando o param palavra não for informado", () => {
    expect(verificaPalavraNoTexto("algum texto", false)).toBe(
      "informe uma palavra"
    );
  });

  it("deve retornar true se o texto contem a palavra", () => {
    expect(verificaPalavraNoTexto("vasco da gama", "vasco")).toBe(true);
  });

  it("deve retornar false se o texto NÃO contem a palavra", () => {
    expect(verificaPalavraNoTexto("vasco da gama", "abacaxi")).toBe(false);
  });
});
