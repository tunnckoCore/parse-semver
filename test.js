/**
 * parse-semver <https://github.com/tunnckoCore/parse-semver>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var parseSemver = require('./index');

describe('parse-semver:', function() {
  describe('should parse and return object', function() {
    it('with empty `version` property and non-empty `name` property', function(done) {
      var actual = parseSemver('docks');
      var expected = {name: 'docks', original: '', range: '*', version: ''};

      assert.deepStrictEqual(actual, expected);
      done();
    });
    it('with non-empty `name` and `version` properties', function(done) {
      var actual = parseSemver('docks@v7.8.9');
      var expected = {name: 'docks', original: 'v7.8.9', range: '7.8.9', version: '7.8.9'};

      assert.deepStrictEqual(actual, expected);
      done();
    });
  });
  describe('should parse, validate and normalize', function() {
    it('given `v1.2.3` version to `1.2.3`', function(done) {
      var actual = parseSemver('docks@v1.2.3');
      var expected = {name: 'docks', original: 'v1.2.3', range: '1.2.3', version: '1.2.3'};

      assert.deepStrictEqual(actual, expected);
      done();
    });
    it('given `4.5.6` version to `4.5.6`', function(done) {
      var actual = parseSemver('docks@4.5.6');
      var expected = {name: 'docks', original: '4.5.6', range: '4.5.6', version: '4.5.6'};

      assert.deepStrictEqual(actual, expected);
      done();
    });
  });
  describe('should work with different semver ranges', function() {
    it('work properly with `^0.5.3`', function(done) {
      var actual = parseSemver('docks@^0.5.3');
      var expected = {name: 'docks', original: '^0.5.3', range: '>=0.5.3 <0.6.0', version: '0.5.3'};

      assert.deepStrictEqual(actual, expected);
      done();
    });
    it('work properly with `~3.4.5`', function(done) {
      var actual = parseSemver('docks@~3.4.5');
      var expected = {name: 'docks', original: '~3.4.5', range: '>=3.4.5 <3.5.0', version: '3.4.5'};

      assert.deepStrictEqual(actual, expected);
      done();
    });
  });
  describe('should throw', function() {
    it('TypeError when no arguments', function(done) {
      var actual = function() {
        parseSemver();
      };
      var expected = TypeError;

      assert.throws(actual, expected);
      done();
    });
    it('TypeError when no string given', function(done) {
      var actual = function() {
        parseSemver({one: 'two'});
      };
      var expected = TypeError;

      assert.throws(actual, expected);
      done();
    });
    it('Error when version is given and invalid', function(done) {
      var actual1 = function() {
        parseSemver('docks@~~>1.2.3');
      };
      var actual2 = function() {
        parseSemver('docks@invalid');
      };
      var expected1 = Error;
      var expected2 = Error;

      assert.throws(actual1, expected1);
      assert.throws(actual2, expected2);
      done();
    });
  });
});
