'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('rents', [
      
    
       {
         usuarioId: 5,
         articleId:4,
         createdAt: new Date(),
          updatedAt: new Date()
      },
       {
         usuarioId: 7,
         articleId:1,
         createdAt: new Date(),
          updatedAt: new Date()
      },
       {
         usuarioId: 8,
         articleId:2,
         createdAt: new Date(),
          updatedAt: new Date()
      },
       {
         usuarioId: 11,
         articleId:3,
         createdAt: new Date(),
          updatedAt: new Date()
      },
       {
         usuarioId: 13,
         articleId:5,
         createdAt: new Date(),
          updatedAt: new Date()
      },
       {
         usuarioId: 2,
         articleId:7,
         createdAt: new Date(),
          updatedAt: new Date()
      },
       {
         usuarioId: 9,
         articleId:6,
         createdAt: new Date(),
          updatedAt: new Date()
      },
    
   
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('rents', null, {});
     
  }
};
