import { QueryInterface, Sequelize, DataTypes } from "sequelize";

export = {
  up: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      guid: {
        type: DataTypes.UUIDV4,
        allowNull: false,
        unique: true,
      },
    });
  },

  down: (queryInterface: QueryInterface, Sequelize: Sequelize) => {
    return queryInterface.dropTable("Users");
  },
};
