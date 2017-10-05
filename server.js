var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    nama: String,
    nilai: Int
  }
`);

var root = {
  nama: () => {
    return 'Muhammad Mahrus Zain';
  },
  nilai: () => {
    return 8;
  }
  ,
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Jalankan link localhost:4000/graphql dibrowser');