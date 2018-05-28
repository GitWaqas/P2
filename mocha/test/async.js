const expect = require("chai").expect;

describe("Testing async behaviour", function(){
    this.timeout(5000)
    var foo = false;
      before(function(done){
              setTimeout(function(done){
                  foo = true;
                  console.log("*************************************************")
                  done();  //Test will fail without this
                }, 1000);
              });
              it("should pass (with done called)", function(){
                  expect(foo).to.equal(true);
                });
            });