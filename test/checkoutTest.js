var should = require('should');
var jQuery = require("../lib/jquery");
var eventDispatcher = require("../utils/event-dispatcher");

describe('checkout', function(){
  var checkout = require('../scripts/checkout');

  it('can scan A', function(){
    checkout.scan('A');
    var price = checkout.total();
    price.should.equal(30);
  });

  it('can scan B', function(){
    checkout.scan('B');
    var price = checkout.total();
    price.should.equal(20);
  });

  it('can scan two A', function(){
    var price = checkout.scan('A') + checkout.scan('A');
    //var price = checkout.total();
    price.should.equal(60);
  });
});
