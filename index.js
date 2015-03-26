/**
 * parse-semver <https://github.com/tunnckoCore/parse-semver>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var semver = require('semver');

/**
 * Parse semver shorthand to object.
 *
 * @param  {String} `<shorthand>` the shorthand to parse, like `mocha@v2.2.0`
 * @return {Object} object with `name` and `version` properties
 * @api public
 */
module.exports = function parseSemver(shorthand) {
  if (typeof shorthand !== 'string') {
    throw new TypeError('[parse-semver] expect `shorthand` to be string');
  }

  shorthand = shorthand.split('@');

  var name = shorthand[0];
  var version = shorthand[1] || '';
  var range = semver.validRange(version) || '';

  if (version.length && range.length === 0) {
    throw new Error('[parse-semver] not valid semver range/version given');
  }

  return {
    name: name,
    range: range,
    version: version.replace(/^[^0-9]+/, ''),
    original: version
  };
};
