import { openApp } from "../shared/openApp";
import { expectMonthHeadline } from "../shared/expectMonthHeadline";
import { expectWeekHeadline } from "../shared/expectWeekHeadline";

Given("I have opened the app", () => {
  openApp();
});

Then("I see the week headline {string}", (text) => {
  expectWeekHeadline(text);
});

Then("I see {int} events", (numberOfEvents) => {
  cy.get("mwl-calendar-week-view-event").should("have.length", numberOfEvents);
});

Then("I see the month headline {string}", (monthViewTitle) => {
  expectMonthHeadline(monthViewTitle);
});

Given("I go to previous week", () => {
  cy.get(".e2e-previous-week-or-month").eq(1).click();
});

Given("I go to next week", () => {
  cy.get(".e2e-next-week-or-month").eq(1).click();
});

Then("I see the weekdays {string}", (weekdaysString) => {
  const weekdays = weekdaysString.split(";");
  for (let i = 0; i < weekdays.length; i++) {
    const weekday = weekdays[i];
    const weekdayParts = weekday.split(",");
    const weekdayName = weekdayParts[0];
    const weekdayDate = weekdayParts[1];
    cy.get(".cal-day-headers > :nth-child(" + (i + 1) + ") > b").should(($el) =>
      expect($el.text().trim()).to.equal(weekdayName.trim())
    );
    cy.get(
      ".cal-day-headers > :nth-child(" + (i + 1) + ") > span"
    ).should(($el) => expect($el.text().trim()).to.equal(weekdayDate.trim()));
  }
});

