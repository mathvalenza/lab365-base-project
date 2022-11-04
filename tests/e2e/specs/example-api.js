// https://docs.cypress.io/api/table-of-contents

describe("Meu teste E2E exemplo com API", () => {
  it("Visita a página /example, digita nome e sobrenome e valida o texto de boas-vindas", () => {
    cy.visit("/example-api");

    cy.contains("a", "Item 1");

    cy.get(":nth-child(1) > .link").click();

    cy.location().should((loc) => {
      expect(loc.toString()).to.eq("http://localhost:8081/example-api/1");
    });
  });
});
