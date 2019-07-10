class contactUsPageObject {

    get firstName() { return $("[name='first_name']");}
    get secondName() { return $("[name='last_name']"); }
    get email() { return $("[name='email']"); }
    get comments() { return $("text area"); }
    get submitButton() { return $("[type='submit']"); }
    get unsuccessfulSubmissionHeader() { return $("body"); }
    get succssfulSubmissionHeader() { return $("contact_reply h1"); }



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

submitAllInformationViaContactUsForm(firstName, secondName, emailAdress, comments) {
    if (firstName) {
        this.firstName.setValue(firstName);
    }
    if (secondName) {
        this.secondName.setValue(secondName);
    }
    if (emailAdress) {
        this.email.setValue(email);
    }
    if (comments) {
        this.comments.setValue(comments);
    }
    this.submitButton.click();
    this.confirmSuccessfulSubmission();
}

confirmSuccessfulSubmission() {

    var validateSubmissionHeader = browser.waitUntil(function () {
        return this.confirmSuccessfulSubmission.getText() == 'Thank You for your Message!'
    }, 3000)
    expect(validateSubmissionHeader, 'Successful Submission Message does not Exist!').to.be.true;
}

confrimUnsuccessfulSubmission() {
    var validateSubmissionHeader = browser.waitUntil(function () {

        return this.unsuccessfulSubmissionHeader.getText == 'Error: all fields are required'
    }, 3000)
    expect(this.unsuccessfulSubmissionHeader.getText()).to.include('Error: all fields are required');
}
}
module.exports = new contactUsPageObject();