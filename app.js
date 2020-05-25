const express = require("express");
const expressgraphQL=require ('express-graphql');
const app = express();
app.use('/api/graphql',expressgraphQL({

}))
app.listen(5000, () => {
  console.log("server calisti.");
});
