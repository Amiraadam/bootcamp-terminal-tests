import assert from "assert";
import yearsAgo from "../yearsAgo.js";
describe('yearsAgo', function() {
    it('should return how many years ago that is from the current year' , function() {
        assert.equal((new Date().getFullYear() - 1979), yearsAgo(1979))
    });
    
    it('should return how many years ago that year is from the current year' , function(){
        assert.equal((new Date().getFullYear() - 2010), yearsAgo(2010));
    });
});