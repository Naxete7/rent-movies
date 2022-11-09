'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('series', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      episode_7_days: {
                type: Sequelize.BOOLEAN
            },
            episodes: {
                type: Sequelize.INTEGER
            },
            seasons: {
                type: Sequelize.INTEGER
            },
            poster: {
                type: Sequelize.STRING,
            },
            rank: {
                type: Sequelize.FLOAT
            },
            cinema: {
                type: Sequelize.BOOLEAN
            },
      theater: {
        type: Sequelize.BOOLEAN
      },
      articleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'articles',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('series');
  }
};