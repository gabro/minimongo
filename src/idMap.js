
var MongoID = require('mongo-id');
var Meteor = require('meteor-client');
var IdMap = require('id-map');

var LocalCollection = require('./collection');

LocalCollection._IdMap = function () {
  var self = this;
  IdMap.call(self, MongoID.idStringify, MongoID.idParse);
};

Meteor._inherits(LocalCollection._IdMap, IdMap);
