import { AutomationPractice } from "../pageObjects/AutomationPractice.page";

describe('DemoQA', () => {
  context("PracticeForm", () => { 

    it('PracticeForm', () => {
      // apmeklē https://demoqa.com/automation-practice-form
      AutomationPractice.visit();
      // nepieciešamās ievades
      AutomationPractice.enterFirstName.type("Davids");
      AutomationPractice.enterLastName.type("Adamovics");
      AutomationPractice.enterUserEmail.type("testemail@gmail.com");
      AutomationPractice.checkRadioButton("Male").check({force: true});
      AutomationPractice.enterPhoneNr.type("6766564659");
      // uzspiež uz kalendāra
      AutomationPractice.clickdateOfBirthInput.click();
      AutomationPractice.selectMonth.select(1); // mēnesis Feb
      AutomationPractice.selectYear.select('1930'); // gads
      AutomationPractice.selectDay.click(); // diena 'February 28th, 1930'

      // AutomationPractice.selectSubject.type("Economics");
      // cy.wait(1000);
      // AutomationPractice.confirmSubject.type('{enter}');

      // subject
      AutomationPractice.selectSubject.type("Economics{enter}");
      // hobbies
      AutomationPractice.selectMusicCheckbox("hobbies-checkbox-3").check({force: true});
      // upload cypress/files/img.png
      AutomationPractice.uploadImg;
      // adrese
      AutomationPractice.writeAdress.type("Random Adress 12-3");
      // Datu izvēle rakstot 
      AutomationPractice.selectState.type("NCR{enter}");
      AutomationPractice.selectCity.type("Delhi{enter}{enter}");
      // pārbaude
      AutomationPractice.tbodyRowToTest;
      
    })
  });
})
