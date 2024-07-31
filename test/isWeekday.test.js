import assert from "assert";
import isWeekday from "../isWeekday.js";
describe('isWeekday' , function(){
    it('should find out if the parameter passed in is a day of the week' , function(){
        assert.equal(isWeekday('Tuesday'), true);
    });

    it('should find out if the parameter passed in is a day of the week' , function(){
        assert.equal(isWeekday('Sunday'), false);
    });
});