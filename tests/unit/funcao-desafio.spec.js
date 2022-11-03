import { funcaoDesafio } from "../../src/exercicios/funcao-desafio.js";

const texto =
  "O teste de software é muito importante na garantia de controle da qualidade do sistema . Ele deve garantir que o sistema atenda todos os requisitos conforme o cliente solicitou . " +
  "No entanto, o teste de software abrange uma área muito maior do que controle da qualidade do sistema .";

describe("testes da função funcaoSurpresa", () => {
  it("---", () => {
    expect(funcaoDesafio(null, "controle")).toBe(0);
    expect(funcaoDesafio(texto, false)).toBe(null);
  });

  it("---", () => {
    expect(funcaoDesafio(texto, "sistema")).toBe(3);
    expect(funcaoDesafio(texto, ".")).toBe(3);
    expect(funcaoDesafio(texto, "ÁREA")).toBe(1);
  });

  it("---", () => {
    expect(funcaoDesafio(texto, "software")).not.toBe(15);

    expect(funcaoDesafio(texto, 15)).not.toBe("software");

    expect(funcaoDesafio(texto, "da")).toBeGreaterThan(0);
  });
});
