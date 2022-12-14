'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    
      usuarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuario',
          key: 'id'
        }},
        articleId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'articles',
            key:'id'
          }

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
    await queryInterface.dropTable('rents');
  }
};