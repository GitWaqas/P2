const expect = require("chai").expect;

const calc = require("../calc/calculator");

describe("Testing the calculator", function(){
    it("3 + 4 should return 7", function(){
        expect(calc.add(3,4)).to.be.equal(7);
    });
});

const PORT = 1234;
const URL = "http://localhost:" + PORT+ "/calc/add/";
const request = require("request");
let server;

describe("Testing the CALC-API", function(){
    before(function(done){
        calc.calcServer(PORT, function(s){
            server = s;
            done();
        })
    })
    after(function(){
        server.close();
    })
    it("/4/7 should return 11", function(done){
        request(URL+"4/7", function(err, res, body){
            console.log(err);
            var result = Number(body);
            expect(result).to.be.equal(11);
            done();
        })
    })
});