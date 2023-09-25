import { openApp } from "../shared/openApp";
import { expectMonthHeadline } from "../shared/expectMonthHeadline";
import { expectWeekHeadline } from "../shared/expectWeekHeadline";

Given("I have opened the app", () => {
  openApp();
});

Then("I see the month headline {string}", (monthViewTitle) => {
  expectMonthHeadline(monthViewTitle);
});

Then("I see {int} events", (numberOfEvents) => {
  cy.get(".month-view-container .cal-events").should("have.length", numberOfEvents);
});

Given("I go to next month", () => {
  cy.get(".e2e-next-week-or-month").eq(0).click();
});

Given("I go to previous month", () => {
  cy.get(".e2e-previous-week-or-month").eq(0).click();
});

Then("I see the week headline {string}", (text) => {
  expectWeekHeadline(text);
});
