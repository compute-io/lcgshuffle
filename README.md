lcgshuffle
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> lcg with shufle


## Installation

``` bash
$ npm install compute-lcgshuffle
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var lcgshuffle = require( 'compute-lcgshuffle' );
```

#### foo( arr )

What does this function do?


## Examples

``` javascript
var foo = require( 'compute-lcgshuffle' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```

## Notes

This module performs a Bays-Durham shuffle on the output from compute-lcg, a linear congruential generator.  The reason for doing so is that this additional step considerably strengthens the "randomness quality" of lcg's output.

### Bays-Durham Shuffle Description 

Suppose, for example, you have a (in this contrived example, terrible) random number generator example_rand() that outputs 5, 10, 15, ..., and you want to shuffle its output in accord with the Bays-Durham algorithm.

1. Make a table T of size K, let us say, for example, 6.

2. Initialize T with K successive calls to example_rand() => T1 = (5 10 15 20 25 30).

3. Get the next random number R from another call to example_rand() => R1 = 35.

4. Generate an index j into T from R by: (R + 1) mod K. => j1 = (35 + 1) mod 6 = 0.

5. Get the next shuffled output from T[j] => our first shuffled output number X1 is T[j1] => T[0] => 5.

6. Now replace T[j] with R. => T[0] = 35 => T2 = (35 10 25 20 25 30).

7. Repeat steps 2-5 for X2, X3, etc.

For example, to get X2:  R2 = example_rand() => 40.  j2 = (40 + 1) mod 6 => 5.  X2 = T[5] => 30.  Set T[5] to R2 => T[5] = 40 => T2 = (35 10 25 20 25 40).


1. Bays, Carter, & Durham, S.D. 1976. 

2. ACM Transactions on Mathematical Software, Vol. 2, p. 59; Thomas N. Herzog and Graham Lord, *Applications of Monte Carlo Methods to Finance and Insurance* p. 19 (2002) (portions available online at http://books.google.com/books?id=ibpfxsxuCUAC&pg=PA19&lpg=PA19&dq=bays+durham+shuffle&source=bl&ots=r6LmFaOgIA&sig=i3o41mPpHejHNgkSPd7QDx0NIOg&hl=en&sa=X&ei=GJ92VMWDBc3fsASb1oKYDg&ved=0CCQQ6AEwATgU#v=onepage&q=bays%20durham%20shuffle&f=false.  See also Numerical Recipes, p. 280-81.




## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2015. rgizz.


[npm-image]: http://img.shields.io/npm/v/compute-lcgshuffle.svg
[npm-url]: https://npmjs.org/package/compute-lcgshuffle

[travis-image]: http://img.shields.io/travis/compute-io/lcgshuffle/master.svg
[travis-url]: https://travis-ci.org/compute-io/lcgshuffle

[coveralls-image]: https://img.shields.io/coveralls/compute-io/lcgshuffle/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/lcgshuffle?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/lcgshuffle.svg
[dependencies-url]: https://david-dm.org/compute-io/lcgshuffle

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/lcgshuffle.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/lcgshuffle

[github-issues-image]: http://img.shields.io/github/issues/compute-io/lcgshuffle.svg
[github-issues-url]: https://github.com/compute-io/lcgshuffle/issues
