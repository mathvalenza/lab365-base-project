// https://docs.cypress.io/api/table-of-contents

describe("Meu teste E2E exemplo", () => {
  it("Visita a página /example, digita nome e sobrenome e valida o texto de boas-vindas", () => {
    cy.visit("/examples");

    cy.get('[data-test-id="input-nome"]').type("Matheus");

    cy.get('[data-test-id="input-sobrenome"]').type("Vinícius");

    cy.contains("h2", "Seja bem-vindo(a), Matheus Vinícius");
  });
});
