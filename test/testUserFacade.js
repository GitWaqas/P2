const expect = require("chai").expect;
const dbSetup = require("..//dbSetup");
const userFacade = require("../facades/userFacade");
const User = require("../models/user");
const Test_dbUri = "mongodb://WaqasMongo:mongoPass00@ds237620.mlab.com:37620/testdbjs";

let connection = null;
describe("Testing the User Facade", function () {

  /* Connect to the TEST-DATABASE */
  before(async function () {
    this.timeout(5000);
    dbSetup.setDbUri(Test_dbUri);
    connection = await dbSetup.connect();
  })


  /* Setup test users*/
  beforeEach(async function () {
    console.log("BeforeEach")
    await User.remove({});
    await Promise.all([
      new User({ firstName: "Kurt", lastName: "Wonnegut", userName: "kw", password: "test" }).save(),
      new User({ firstName: "Hanne", lastName: "Wonnegut", userName: "hw", password: "test" }).save(),
    ])
  })

  it("Should find all users (Kurt and Hanne)", async function () {
    var users = await userFacade.getAllUsers();
    expect(users.length).to.be.equal(2);
  });

  it("Should Find Kurt Wonnegut", async function () {
    var user = await userFacade.findByUsername("kw");
    expect(user.firstName).to.be.equal("Kurt");
  });

  it("Should add Peter Pan", async function () {
    var user = await userFacade.addUser("Peter", "Pan", "peter", "test");
    expect(user.firstName).to.be.equal("Peter");

    var users = await userFacade.getAllUsers();
    expect(users.length).to.be.equal(3);
  });
})