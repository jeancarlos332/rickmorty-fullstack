
import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Character = sequelize.define("Character", {
  name: DataTypes.STRING,
  status: DataTypes.STRING,
  species: DataTypes.STRING,
  gender: DataTypes.STRING,
  origin: DataTypes.STRING,
  image: DataTypes.STRING,
  favorite: DataTypes.BOOLEAN,
  deleted: DataTypes.BOOLEAN
});
