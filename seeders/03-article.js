'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('articles', [
      
      {
        type: 'comedia',
        age: 8,
       
       createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        type: 'musical',
        age: 8,
        
        createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        type: 'drama',
        age: 18,
        
       createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        type: 'acción',
        age: 18,
        
       createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        type: 'animación',
        age: 3,
        
       createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        type: 'aventuras',
        age: 12,
       
       createdAt: new Date(),
          updatedAt: new Date()
      },
       {
        type: 'ciencia ficción',
         age: 12,
         
       createdAt: new Date(),
          updatedAt: new Date()
      },


    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('articles', null, {});
     
  }
};
