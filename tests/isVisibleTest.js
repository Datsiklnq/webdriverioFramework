beforeEach(function(){
browser.url('/Hidden-Elements/index.html');
})
describe('Test whether hidden elements exist',function(){
    it('Button display is set to non display but still exist in html dom therefore should return true',function(done){
    var isVisible = browser.isVisible('#not-displayed');
    console.log(isVisible);
});
it('Button display is set to visiblity hidden but still exsists in htm dom therefore should return true', function(done){
    var isVisible = browser.isVisible('#visibility-hidden');
    console.log(isVisible);
});
it('Button display is set to zero opacity but still exist in html dom therefore should return true ' , function(done){
    var isVisible = browser.isVisible('#zero-opacity');
    console.log(isVisible);
   
});
it('Header text is visible and exist in the html dom therefore should return true ',function(done){
    var isVisible = browser.isVisible('h1');
    console.log(isVisible);
   
});
// it('There is no such element with the id of #no-such-element within the html dom therefore should return false',function(done){
//     var isVisible = browser.isVisible('#no-such-elementd');
//     console.log(isVisible);
    
// });
});