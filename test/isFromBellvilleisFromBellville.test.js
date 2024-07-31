import assert from "assert";
import isFromBellville from "../isFromBellville.js";
describe('isFromBellville' , function(){
    it('should return true if a registration number is for Bellville otherwise returns false' , function (){
        assert.equal(isFromBellville('CY 123'), true);
    });

    it('should return true if a registration number is for Bellville otherwise returns false' , function(){
        assert.equal(isFromBellville('CJ 123'), false);
        });
});