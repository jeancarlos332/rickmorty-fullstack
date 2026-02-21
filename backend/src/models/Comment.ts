import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Comment = sequelize.define("Comment", {
 id: {
  type: DataTypes.INTEGER,
  primaryKey: true,
  autoIncrement: true
 },

 text: {
  type: DataTypes.STRING,
  allowNull: false
 },

 characterId: {
  type: DataTypes.INTEGER,
  allowNull: false
 },

 createdAt: {
  type: DataTypes.DATE,
  defaultValue: DataTypes.NOW
 },

 updatedAt: {
  type: DataTypes.DATE,
  defaultValue: DataTypes.NOW
 }

});
