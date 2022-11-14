'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('rents', [
      
      {
        usuarioId: 1,
        createdAt: new Date(),
          updatedAt: new Date()
      },
       {
         usuarioId: 5,
         createdAt: new Date(),
          updatedAt: new Date()
      },
       {
         usuarioId: 7,
         createdAt: new Date(),
          updatedAt: new Date()
      },
       {
         usuarioId: 8,
         createdAt: new Date(),
          updatedAt: new Date()
      },
       {
         usuarioId: 11,
         createdAt: new Date(),
          updatedAt: new Date()
      },
       {
         usuarioId: 13,
         createdAt: new Date(),
          updatedAt: new Date()
      },
       {
         usuarioId: 2,
         createdAt: new Date(),
          updatedAt: new Date()
      },
       {
         usuarioId: 9,
         createdAt: new Date(),
          updatedAt: new Date()
      },
       {
         usuarioId: 10,
         createdAt: new Date(),
          updatedAt: new Date()
      },
       {
         usuarioId: 3,
         createdAt: new Date(),
          updatedAt: new Date()
      },
       {
         usuarioId: 5,
         createdAt: new Date(),
          updatedAt: new Date()
      },
   
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('rents', null, {});
     
  }
};
