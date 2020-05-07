// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var ssi_pb = require('./ssi_pb.js');

function serialize_ssi_Credential(arg) {
  if (!(arg instanceof ssi_pb.Credential)) {
    throw new Error('Expected argument of type ssi.Credential');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssi_Credential(buffer_arg) {
  return ssi_pb.Credential.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssi_Empty(arg) {
  if (!(arg instanceof ssi_pb.Empty)) {
    throw new Error('Expected argument of type ssi.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssi_Empty(buffer_arg) {
  return ssi_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssi_Identity(arg) {
  if (!(arg instanceof ssi_pb.Identity)) {
    throw new Error('Expected argument of type ssi.Identity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssi_Identity(buffer_arg) {
  return ssi_pb.Identity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssi_IssuerSubject(arg) {
  if (!(arg instanceof ssi_pb.IssuerSubject)) {
    throw new Error('Expected argument of type ssi.IssuerSubject');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ssi_IssuerSubject(buffer_arg) {
  return ssi_pb.IssuerSubject.deserializeBinary(new Uint8Array(buffer_arg));
}


var SSIService = exports.SSIService = {
  createSelfSovereignIdentity: {
    path: '/ssi.SSI/CreateSelfSovereignIdentity',
    requestStream: false,
    responseStream: false,
    requestType: ssi_pb.Empty,
    responseType: ssi_pb.Identity,
    requestSerialize: serialize_ssi_Empty,
    requestDeserialize: deserialize_ssi_Empty,
    responseSerialize: serialize_ssi_Identity,
    responseDeserialize: deserialize_ssi_Identity,
  },
  issueCredential: {
    path: '/ssi.SSI/IssueCredential',
    requestStream: false,
    responseStream: false,
    requestType: ssi_pb.IssuerSubject,
    responseType: ssi_pb.Credential,
    requestSerialize: serialize_ssi_IssuerSubject,
    requestDeserialize: deserialize_ssi_IssuerSubject,
    responseSerialize: serialize_ssi_Credential,
    responseDeserialize: deserialize_ssi_Credential,
  },
};

exports.SSIClient = grpc.makeGenericClientConstructor(SSIService);
