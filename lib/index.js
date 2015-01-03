/**
*
*	COMPUTE: lcgshuffle
*
*
*	DESCRIPTION:
*		- lcg with shufle
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. rgizz.
*
*
*	AUTHOR:
*		rgizz. gztown2216@yahoo.com. 2015.
*
*/

'use strict';

// MODULES //

// var module_alias = require( 'module_name' );


// FUNCTIONS //

//-----------------------------------------------
// This function is for testing only.
//
// frand is the random number generator function
//  whose output we are shuffling.
// shufTab is the shuffle table, which is filled
//  with K calls to frand().
// K is the size of shuffle table.
// TODO. Provide JSDoc documentation
// TODO. Test params for type.
randmod.mkHtfShuffWithK = function( frand, shufTab, K ) {
  return function() {
    var Ri, j, Xj;

    // Ri is the next random number from frand
    Ri = frand();

    // Generate j, an index into shufTab
    j = ( Ri + 1 ) % K;

    // Xj is the random number we will return, which
    //  we get from the jth position in the shuffle table.
    Xj = shufTab[ j ];

    // We put Ri in the shuffle table in Xj's old position
    shufTab[ j ] = Ri;

    return Xj;
  }
}

//-----------------------------------------------
// The parameter htfrand is the random number generator function
//  whose output we are shuffling.
// Returns a htfshuff() function -- htfrand with its output
//  Bays-Durham-shuffled.
randmod.mkHtfShuff = function( htfrand ) {
  // K is the size of shuffle table.
  var K = 32;
  // shufTab is the shuffle table, which is filled
  //  with K calls to frand().
  var shufTab = new Array( K );
  var i;
  for(i = 0; i < K; i++) {
    shufTab[ i ] = htfrand();
  }
  console.log( "shufTab = " + shufTab );
  return function() {
    var Ri, j, Xj;

    // Ri is the next random number from frand
    Ri = htfrand();

    // Generate j, an index into shufTab
    j = ( Ri + 1 ) % K;

    // Xj is the random number we will return, which
    //  we get from the jth position in the shuffle table.
    Xj = shufTab[ j ];

    // We put Ri in the shuffle table in Xj's old position
    shufTab[ j ] = Ri;

    return Xj;
  }
}


/**
* FUNCTION: foo()
*	{{ foo description }}.
*/
function foo() {

} // end FUNCTION foo()


// EXPORTS //

module.exports = foo;
