## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Parse, normalize and validate given [semver] shorthand (e.g. gulp@v3.8.10) to object.

## Install
```
npm i --save parse-semver
npm test
```


## API
> For more use-cases see the [tests](./test.js)

### [parseSemver](./index.js#L35)
> It returns object with `original` version given, expanded semver `range`, and `version`
which is valid [semver] version.

- `<shorthand>` **{String}** the shorthand to parse, like `mocha@v2.2.0`
- `return` **{Object}** object with few properties

**Example**
```js
var parseSemver = require('parse-semver');

parseSemver('docks@~3.4.5');
//=> {name: 'docks', original: '~3.4.5', range: '>=3.4.5 <3.5.0', version: '3.4.5'}

parseSemver('docks@v1.2.3');
//=> {name: 'docks', original: 'v1.2.3', range: '1.2.3', version: '1.2.3'}

parseSemver('docks');
//=> {name: 'docks', original: '', range: '*', version: ''}
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/parse-semver
[npmjs-img]: https://img.shields.io/npm/v/parse-semver.svg?style=flat&label=parse-semver

[coveralls-url]: https://coveralls.io/r/tunnckoCore/parse-semver?branch=master
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/parse-semver.svg?style=flat

[license-url]: https://github.com/tunnckoCore/parse-semver/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/tunnckoCore/parse-semver
[travis-img]: https://img.shields.io/travis/tunnckoCore/parse-semver.svg?style=flat

[daviddm-url]: https://david-dm.org/tunnckoCore/parse-semver
[daviddm-img]: https://img.shields.io/david/tunnckoCore/parse-semver.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/tunnckoCore/parse-semver/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), March 26, 2015_

[semver]: https://github.com/isaacs/node-semver
