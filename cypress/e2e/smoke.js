describe("NetflixVirus", () => {
  it("works", () => {
    cy.visit("/");
    cy.findByText(/NetflixVirus/i);
  });

  it("can go see a movie details and come back to movies list", () => {
    cy.visit("/");
    cy.findByAltText(/avatar/i).click();
    cy.url().should("eq", "http://localhost:3000/movie/19995");
    cy.findByRole("heading", /avatar/i);
    cy.findByRole("heading", /netflixvirus/i).click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
