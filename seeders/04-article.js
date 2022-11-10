'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('articles', [
      
      {
        type: 'comedia',
       age: 8
      },
      {
        type: 'musical',
       age: 8
      },
      {
        type: 'drama',
       age: 18
      },
      {
        type: 'acción',
       age: 18
      },
      {
        type: 'animación',
       age: 3
      },
      {
        type: 'aventuras',
       age: 12
      },
       {
        type: 'ciencia ficción',
       age: 12
      },


    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('articles', null, {});
     
  }
};
