import assert from "assert";
import greet from "../greet.js";
describe('greet function' , function(){
    it('should greet Amira with "Hello, Amira"' , function(){
        assert.equal(greet("Amira"), "Hello, Amira");
});

it('should greet Ahmed with "Hello, Ahmed"' , function(){
    assert.equal(greet("Amira"), "Hello, Amira");
});
});