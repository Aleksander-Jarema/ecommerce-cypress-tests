describe('TC01 – Dodanie produktu do koszyka', () => {
  it('Powinien dodać jeden produkt i pokazać go w koszyku', () => {
    // 1. Wejdź na stronę
    cy.visit('https://automationexercise.com')

    // 2. Kliknij "Products"
    cy.contains('Products').click()

    // 3. Upewnij się, że jesteś na stronie produktów
    cy.url().should('include', '/products')

    // 4. Dodaj pierwszy produkt do koszyka
    cy.get('.product-overlay').first().invoke('show')
    cy.contains('Add to cart').first().click()

    // 5. Kliknij "View Cart"
    cy.contains('View Cart').click()

    // 6. Sprawdź, czy produkt jest w koszyku
    cy.get('.cart_description h4 a').should('contain', 'Blue Top')
    cy.get('.cart_quantity').should('contain', '1')
  })
})