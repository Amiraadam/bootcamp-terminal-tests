import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js" ;
describe('totalPhoneBill' , function (){
    it('should calculate the total bill for the date provided' , function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms,sms'));
    });

    it('should calculate the total bill for the data provided' , function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });

    it('should calculate the total bill for the data provided' , function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });
});