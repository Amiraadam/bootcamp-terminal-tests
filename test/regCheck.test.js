import assert from "assert";
import regCheck from "../regCheck.js";
assert.equal(regCheck('DC 55 YU GP', 'GP'), true);assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
describe('regCheck' , function(){
    if('should return true for registration number like this "RG 45 HN GP""LKG 679 EC" , The functionshould return false for registration numbers like this"ND 123 456""CY 678-453"' , function(){
        assert.equal(regCheck('5566 L', 'L'), true);
    });

    it('sould return true if a registration number is for Bellville otherwise return false' , function(){
        assert.equal(regCheck('5566 L', 'M'), false);
    });
});