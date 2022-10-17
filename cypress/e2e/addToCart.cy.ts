describe("Cart", () => {
  it("should add product to cart", () => {
    cy.visit("http://localhost:3000");
    cy.get(`button[id="product-0"]`).click();
    cy.get(`span[id="cart-length"]`).contains(1);
  });
});
