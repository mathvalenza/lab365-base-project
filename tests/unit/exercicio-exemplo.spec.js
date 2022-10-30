import { somaNumeros } from "../../src/exercicios/exercicio-exemplo";

describe("test", () => {
  it("não deve somar quando há algum valor inválido", () => {
    expect(somaNumeros("asdsad", null)).toBe("entrada inválida");
  });

  it("deve retornar a soma dos valores quando ambos são válidos", () => {
    expect(somaNumeros(10, 25)).toBe(35);

    expect(somaNumeros(256, 250)).toBe(506);

    expect(somaNumeros(5, -3)).toBe(2);

    expect(somaNumeros(5, -15)).toBe(-10);
  });
});
