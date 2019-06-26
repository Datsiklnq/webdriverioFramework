beforeEach(function(){
    browser.url('/Contact-Us/contactus.html');

})
describe('Test Contact us form WebdriverUni', function(){
    beforeEach(function(){
      console.log('Inside the describe block!');
    })
    
    it('Should be albe to submit a successful submission via contact us form', function(done){
        browser.setValue("[name='first_name']",'Przemek');
        browser.setValue("[name='last_name']",'Kieloch');
        browser.setValue("[name='email']",'datsiklnq@gmail.com');
        browser.setValue("[name='message']",'No comment');
        browser.click("[type='submit']");
      
    });


    it('Should not be albe to submit a successful submission via contact us form as all fields are required', function(done) {
        browser.setValue("[name='first_name']",'Emil');
        browser.setValue("[name='last_name']",'Kieloch');
        browser.setValue("[name='email']",'emil@gmail.com');
       browser.click("[type='submit']");
    });
    it('Should not be albe to submit a successful submission via contact us form as all fields are required', function(done) {
        browser.setValue("[name='first_name']",'Sarah');
        browser.setValue("[name='email']",'sarah@gmail.com');
        browser.click("[type='submit']");
        
    });
    it('Should not be albe to submit a successful submission via contact us form as all fields are required', function(done) {
        browser.setValue("[name='first_name']",'Jim');
        browser.setValue("[name='last_name']",'Beam');
        browser.click("[type='submit']");
    });
});
