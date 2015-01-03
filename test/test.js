'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	lib = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

var Ktoy = 8;
var shuffTabToy = new Array( Ktoy );
var itoy;
var htfShuffToy;

var toyRandFunc = randMod.makeRandWithAM(3,31,9);
var toyRandList = randMod.genRandList( 30, toyRandFunc );
var toyRandExpectedList =
  [27,19,26,16,17,20,29,25,13,8,24,10,30,28,22,
  4,12,5,15,14,11,2,6,18,23,7,21,1,3,9];


// Make another toyRandFun
var toyRandFunc2 = randMod.makeRandWithAM(3,31,9);

for(itoy = 0; itoy < Ktoy; itoy++) {
  shuffTabToy[ itoy ] = toyRandFunc2();
}

htfShuffToy = randMod.mkHtfShuffWithK(toyRandFunc2, shuffTabToy, Ktoy);

  describe('htfShuffToy test', function() {
    it( 'should be equal to 29', function() {
      assert.equal( htfShuffToy(), 29 );
    });
    it( 'should be equal to 19', function() {
      assert.equal( htfShuffToy(), 19 );
    });
    it( 'should be equal to 8', function() {
      assert.equal( htfShuffToy(), 8 );
    });
    it( 'should be equal to 16', function() {
      assert.equal( htfShuffToy(), 16 );
    });
    it( 'should be equal to 25', function() {
      assert.equal( htfShuffToy(), 25 );
    });
    it( 'should be equal to 20', function() {
      assert.equal( htfShuffToy(), 20 );
    });
  });



describe( 'compute-lcgshuffle', function tests() {

	it( 'should export a function', function test() {
		expect( lib ).to.be.a( 'function' );
	});

	it( 'should do something' );

});
