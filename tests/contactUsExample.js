import {ContactUsObject} from "../objectRepository/ContactUsObjects";


class contactUsExample extends Base {

}

beforeEach(function(){
    browser.url('/Contact-Us/contactus.html');

   
})
it('Should be albe to submit a successful submission via contact us form', function(done){
    browser.setValue("[name='first_name']",'Przemek');
    browser.setValue("[name='last_name']",'Kieloch');
    browser.setValue("[name='email']",'datsiklnq@gmail.com');
    browser.setValue("[name='message']",'No comment');
    browser.click("[type='submit']");

});
