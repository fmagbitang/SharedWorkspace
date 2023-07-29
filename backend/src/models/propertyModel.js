const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/dbConfig');

// Connect to the SQLite database
const sequelize = dbConfig.connect();

// Define the Property model
const Property = sequelize.define(
  'Property',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // Use auto-incrementing ID
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    neighborhood: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    squarefoot: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parking: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    transportation: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    created_at: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'property',
    timestamps: false, // Set to true to include timestamps
  }
);

module.exports = Property;
