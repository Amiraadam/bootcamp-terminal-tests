import assert from "assert";
import transportFee from "../transportFee.js";
describe('transportFee' , function(){
    it('should return the right price based on the shift you are working' , function(){
        assert.equal(transportFee('morning'), 'R20');
    });

    it('should return the right price based on the shift you are working' , function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('should return the right price based on the shift you are working' , function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });
});