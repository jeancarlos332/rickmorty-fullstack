import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import { sequelize } from "./config/database";

import "./models/Comment";
import "./models/Character";

const app = express();

app.use(cors());

app.use("/graphql",
 graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
 })
);

sequelize.sync().then(() => {
 console.log("DB synced");

 app.listen(4000, () => {
  console.log("Server running");
 });
});
