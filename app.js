const express = require("express");
const expressgraphQL=require ('express-graphql');
const schema=require('./schema/schema');
const app = express();
app.use('/api/graphql',expressgraphQL({
schema:schema,
graphiql:true
}))
app.listen(5000, () => {
  console.log("server calisti.");
});
