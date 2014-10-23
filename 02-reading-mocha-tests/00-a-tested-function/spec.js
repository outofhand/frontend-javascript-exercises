var expect = require("chai").expect;
var challenge = require("./challenge.js");

describe("linkTo", function() {
  it("should be defined", function() {
    expect(challenge.linkTo).to.exist;
  });

  it("should return a valid link for Bloc", function() {
    expect(challenge.linkTo("http://www.bloc.io", "Bloc")).to.eql("<a href='http://www.bloc.io'>Bloc</a>");
  });
});
