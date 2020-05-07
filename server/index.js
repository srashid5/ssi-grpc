var messages = require('../proto/ssi_pb');
var services = require('../proto/ssi_grpc_pb');

const grpc = require('grpc');

function createSelfSovereignIdentity(call, callback) {
  var reply = new messages.Identity();
  reply.setSeed(`osca-senior-citizen-seed`);
  reply.setPassword('osca-senior-citizen-password');
  reply.setDid('osca-senior-citizen-did');
  callback(null, reply);
}

function issueCredential(call, callback) {
  var reply = new messages.Credential();
  reply.setCredential('osca-senior-citizen-credential');
  callback(null, reply);
}

/**
 * Starts an RPC server that receives requests from a different RPC client
 * sample server port
 */
function main() {
  var ssiServerAddress = process.env.SSI_SERVER_ADDRESS || '0.0.0.0:50050';
  var server = new grpc.Server();
  server.addService(services.SSIService, {
      createSelfSovereignIdentity: createSelfSovereignIdentity,
      issueCredential: issueCredential
  });
  server.bind(ssiServerAddress, grpc.ServerCredentials.createInsecure());
  server.start();
  console.log(`gRPC server is listening on ${ssiServerAddress}`)
}

main();
