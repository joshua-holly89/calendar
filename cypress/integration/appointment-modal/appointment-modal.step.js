import { openApp } from "../shared/openApp";

Given("I have opened the app", () => {
  openApp();
});

Given("I click on the first event", () => {
  cy.get("mwl-calendar-week-view-event").eq(0).click();
});

Given("I go to next appointment", () => {
  cy.get(".e2e-next-appointment").click();
});

Given("I go to previous appointment", () => {
  cy.get(".e2e-previous-appointment").click();
});

Then("I see the date {string}", (date) => {
  cy.get(".e2e-appointment-date").should(($el) =>
    unifyAndCompareStrings($el, date)
  );
});

Then("I see the time {string}", (time) => {
  cy.get(".e2e-appointment-time").should(($el) =>
    unifyAndCompareStrings($el, time)
  );
});

Then("I see the property name {string}", (propertyName) => {
  cy.get(".e2e-property-name").should(($el) =>
    unifyAndCompareStrings($el, propertyName)
  );
});

Then("I see the address {string}", (address) => {
  cy.get(".e2e-property-address").should(($el) =>
    unifyAndCompareStrings($el, address)
  );
});

Then("I see the landlord {string}", (landlord) => {
  cy.get(".e2e-property-landlord").should(($el) =>
    unifyAndCompareStrings($el, landlord)
  );
});

Then("I see the attendee count {string}", (attendeeCount) => {
  cy.get(".e2e-attendees").should(($el) =>
    unifyAndCompareStrings($el, attendeeCount)
  );
});

function unifyAndCompareStrings(first, second) {
  expect(first.text().trim().replace(/\s+/g, " ")).to.equal(
    second.trim().replace(/\s+/g, " ")
  );
}
