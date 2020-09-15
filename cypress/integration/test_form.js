describe("Testing our form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  it("fills out name", () => {
    const name = "Alex Andrew";

    const special = "add extra peppers and steak";

    cy.get("input#name").type(name).should("have.value", name);

    cy.get("select")
      .select("medium 14 pizza")
      .should("have.value", "medium 14 pizza");

cy.get("#ing-Tomato").click();
cy.get("#ing-Chicken").click();

    cy.get("input#special").type(special).should("have.value", special);

    cy.get("input#terms").click(true);

    cy.get("form").submit(true);
  });
});
