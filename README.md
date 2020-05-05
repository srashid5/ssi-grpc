# simple-grpc

##### step 1: install dependencies
`npm install`

##### step 2: compile proto files
```
protoc --proto_path=proto --js_out=import_style=commonjs,binary:proto --grpc_out=./proto --plugin=protoc-gen-grpc=node_modules/grpc-tools/bin/grpc_node_plugin proto/ssi.proto
```

##### step 3: run server
run the server via `npm start` or `node server`


