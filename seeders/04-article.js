'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('articles', [
      
      {
        type: 'comedia',
        age: 8,
        rentId: 1,
       createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        type: 'musical',
        age: 8,
        rentId: 3,
        createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        type: 'drama',
        age: 18,
        rentId: 5,
       createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        type: 'acción',
        age: 18,
        rentId: 7,
       createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        type: 'animación',
        age: 3,
        rentId: 2,
       createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        type: 'aventuras',
        age: 12,
        rentId: 4,
       createdAt: new Date(),
          updatedAt: new Date()
      },
       {
        type: 'ciencia ficción',
         age: 12
         , rentId: 6,
       createdAt: new Date(),
          updatedAt: new Date()
      },


    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('articles', null, {});
     
  }
};
