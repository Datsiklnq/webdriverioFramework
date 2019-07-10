class contactUsPageObject {

    get firstName() { return $("[name='first_name']");}
    get secondName() { return $("[name='last_name']"); }
    get email() { return $("[name='email']"); }
    get comments() { return $("textarea"); }
    get submitButton() { return $("[type='submit']"); }
  



setFirstName(firstName) {

    return this.firstName.setValue(firstName);
}
setSecondName(secondName) {

    return this.secondName.setValue(secondName);
}
setEmail(email) {

    return this.email.setValue(email);
}
setComments(comments) {

    return this.comments.setValue(comments);
}

clickSubmitButton() {

    return this.submitButton.click();
}

submitAllInformationViaContactUsForm(firstName, secondName, email, comments) {
    if (firstName) {
        this.firstName.setValue(firstName);
    }
    if (secondName) {
        this.secondName.setValue(secondName);
    }
    if (email) {
        this.email.setValue(email);
    }
    if (comments) {
        this.comments.setValue(comments);
    }
    this.submitButton.click();
   this.confirmSuccessfulSubmission();
    
}

 confirmSuccessfulSubmission() {
    var successfulSubmissionHeader = "#contact_reply h1";
     var validateSubmissionHeader = browser.waitUntil(function () {
         return browser.getText(successfulSubmissionHeader) == 'Thank You for your Message!'
     }, 4000)
     expect(validateSubmissionHeader, 'Successful Submission Message does not Exist!').to.be.true;
 }

confrimUnsuccessfulSubmission() {
    var unsuccessfulSubmissionHeader = 'body';
    var validateSubmissionHeader = browser.waitUntil(function () {

        return browser.getText(unsuccessfulSubmissionHeader) == 'Error: all fields are required'
    }, 3000)
    expect(browser.getText(unsuccessfulSubmissionHeader)).to.include('Error: all fields are required');
}
}
module.exports = new contactUsPageObject();