import assert from "assert";
import countRegNumber from "../countRegNumber.js";
describe('countRegNumber' , function(){
    it('should retun the number of registration number in the string' , function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ812328')
        assert.equal(regCount, 3);
    });

    it('should return the number of registration numbers in the string' , function(){
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });
});