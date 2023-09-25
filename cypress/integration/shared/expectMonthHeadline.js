export function expectMonthHeadline(monthViewTitle) {
  cy.get(".e2e-month-headline").should(($el) => expect($el.text().trim()).to.equal(monthViewTitle)
  );
}
