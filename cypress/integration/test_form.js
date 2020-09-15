describe("Testing our form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });
  it("fills out name", () => {
    const name = "Alex Andrew";

    const special = "add extra peppers and steak";

    cy.get("input#name").type(name).should("have.value", name);

    cy.get("select")
      .select("xlarge 18 pizza")
      .should("have.value", "xlarge 18 pizza");

cy.get('[value="Sauce"] > #ing').click();
    cy.get(":nth-child(4) > #ing").click();
    cy.get(":nth-child(5) > #ing").click();
    cy.get(":nth-child(7) > #ing").click()

    cy.get("input#special").type(special).should("have.value", special);

    cy.get("input#terms").click(true);

    cy.get("form").submit(true);
  });
});
