'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('rol', [
      {
        tipo: 'usuario',
          createdAt: new Date(),
          updatedAt: new Date()
      },
         {
        tipo: 'administrador',
          createdAt: new Date(),
          updatedAt: new Date()
      }
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('rol', null, {});
     
  }
};
