var assert = require("chai").assert;
var check = require('../luhn');

describe("Luhn check with valid numbers", function() {
  it("should return true if a number passes the Luhn check.", function() {
    var n = "0";
    assert.isTrue(check(n));
  });
  it("should return true if a number passes the Luhn check.", function() {
      var n = "79927398713";
      assert.isTrue(check(n));
    });
  it("should return true if a number passes the Luhn check.", function() {
      var n = "8732301042";
      assert.isTrue(check(n));
    });
  it("should return true if a number passes the Luhn check.", function() {
      var n = "00011445";
      assert.isTrue(check(n));
    });
});

describe("Luhn check with invalid numbers", function() {
  it("should return false if a number fails the Luhn check.", function() {
    var n = "1";
    assert.isTrue(!check(n));
  });
  it("should return false if a number fails the Luhn check.", function() {
    var n = "79927398714";
    assert.isTrue(!check(n));
  });
  it("should return false if a number fails the Luhn check.", function() {
    var n = "8732301041";
    assert.isTrue(!check(n));
  });
  it("should return false if a number fails the Luhn check.", function() {
    var n = "00011446";
    assert.isTrue(!check(n));
  });
});