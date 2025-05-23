'use strict';

var expect = require("chai").expect;
var calculator = require("../app/calculator");

describe("Calculator - Test", function(){
       describe("Test Operations", function(){

        it("Testing the sum operation", function(){
           expect(calculator.add(1,1)).to.equal(1+1);
           });
       
           it("Testing the subtract operation", function(){
            expect(calculator.subtract(1,1)).to.equal(1-1);
            });
       
            it("Testing the multiply operation", function(){
                expect(calculator.multiply(3,3)).to.equal(3*3);
                });
       
                it("Testing the squareRoot operation", function(){
                    expect(calculator.squareRoot(34)).to.equal(5.830951894845301);
                    });
                
                    it("Testing the divide operation", function(){
                        expect(calculator.divide(3,3)).to.equal(3/3);
                        });
                    
                        it("Testing the divide operation by zero", function(){
                            expect(() => calculator.divide(3,0)).to.throw("Cannot divide by zero");
                            });

                        it("Testing the squareRoot operation with a negative number", function(){
                            expect(calculator.squareRoot(-4)).to.be.NaN;
                        });
       
                        });

});
