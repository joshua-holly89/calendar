export function expectWeekHeadline(text) {
  cy.get(".e2e-week-headline").should(($el) => expect($el.text().trim()).to.equal(text)
  );
}
