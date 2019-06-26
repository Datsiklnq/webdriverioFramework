describe('Test Radio buttons Page', function(){
    browser.url("Dropdown-Checkboxes-RadioButtons/index.html")

it('Should be able to focus on checkbox button element ', function(done){
    browser.setViewportSize({
        width: 1200,
        height: 800
    })
    browser.pause(2000);
    browser.click('#checkboxes label:nth-of-type(1) [type]');
    var checkBoxButtonOne = browser.hasFocus('#checkboxes label:nth-of-type(1) [type]');
    console.log('Checkbox button one has a value of ' + checkBoxButtonOne);
    expect(checkBoxButtonOne,'The checkbox (one ) should have foucs! ').to.be.true;
   
    var checkBoxButtonTwo = browser.hasFocus('#checkboxes label:nth-child(5) [type]');
    console.log('Checkbox button two has a value of ' + checkBoxButtonTwo);
    expect(checkBoxButtonTwo,'The checkbox (two ) should have foucs! ').to.be.true;
});
});