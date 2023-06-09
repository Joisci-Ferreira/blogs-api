'use strict'

module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      published: {
        allowNull: false,
        type: Sequelize.DATE,
        dafaultValue: Sequelize.literal('NOW()'),
      },
      updated: {
        allowNull: false,
        type: Sequelize.DATE,
        dafaultValue: Sequelize.literal('NOW()'),
      },
    });
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};