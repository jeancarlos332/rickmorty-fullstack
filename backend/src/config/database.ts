import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "rickmorty",
  "postgres", 
  "admin",     
  {
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    logging: false
  }
);

sequelize.authenticate()
  .then(() => console.log("DB connected"))
  .catch(err => console.error("DB error:", err));
