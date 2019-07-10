
var contactUsPageObject = require('../objectRepository/contactUsPageObject');  




beforeEach(function () {
    browser.url('/Contact-Us/contactus.html');


})
describe('Test Contact us form WebdriverUni', function () {
    beforeEach(function () {
        console.log('Inside the describe block!');
    })

    it('Should be able to submit a successful submission via contact us form', function (done) {
        
        contactUsPageObject.submitAllInformationViaContactUsForm('Emil','MyBrother','emilianko@gmail.com','Hello');
           
    });


    it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
        contactUsPageObject.setFirstName("Przemek");
        contactUsPageObject.setSecondName("Kieloch");
        contactUsPageObject.setEmail("datsiklnq@gmail.com");
        contactUsPageObject.clickSubmitButton();
        contactUsPageObject.confrimUnsuccessfulSubmission();
    });
    it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
        contactUsPageObject.setFirstName("Seba");
        contactUsPageObject.setEmail("Sebek@gmail.com");
        contactUsPageObject.clickSubmitButton();
        contactUsPageObject.confrimUnsuccessfulSubmission();

    });
    it('Should not be albe to submit a successful submission via contact us form as all fields are required', function (done) {
       contactUsPageObject.setSecondName("Wieslawa");
       contactUsPageObject.setEmail("wiesia@gmail.com");
       contactUsPageObject.clickSubmitButton();
       contactUsPageObject.confrimUnsuccessfulSubmission();

    });
});
