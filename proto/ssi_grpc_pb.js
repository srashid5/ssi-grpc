// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var ssi_pb = require('./ssi_pb.js');

function serialize_ssi_Identity(arg) {
  if (!(arg instanceof ssi_pb.Identity)) {
    throw new Error('Expected argument of type ssi.Identity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssi_Identity(buffer_arg) {
  return ssi_pb.Identity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssi_Issuer(arg) {
  if (!(arg instanceof ssi_pb.Issuer)) {
    throw new Error('Expected argument of type ssi.Issuer');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssi_Issuer(buffer_arg) {
  return ssi_pb.Issuer.deserializeBinary(new Uint8Array(buffer_arg));
}


var SSIService = exports.SSIService = {
  createSelfSovereignIdentity: {
    path: '/ssi.SSI/CreateSelfSovereignIdentity',
    requestStream: false,
    responseStream: false,
    requestType: ssi_pb.Issuer,
    responseType: ssi_pb.Identity,
    requestSerialize: serialize_ssi_Issuer,
    requestDeserialize: deserialize_ssi_Issuer,
    responseSerialize: serialize_ssi_Identity,
    responseDeserialize: deserialize_ssi_Identity,
  },
};

exports.SSIClient = grpc.makeGenericClientConstructor(SSIService);
