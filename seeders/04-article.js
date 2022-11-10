'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('articles', [
      
      {
        type: 'comedia',
        age: 8,
       rentId:1
      },
      {
        type: 'musical',
        age: 8,
        rentId:3
      },
      {
        type: 'drama',
        age: 18,
       rentId:5
      },
      {
        type: 'acción',
        age: 18,
       rentId:7
      },
      {
        type: 'animación',
        age: 3,
       rentId:2
      },
      {
        type: 'aventuras',
        age: 12,
       rentId:4
      },
       {
        type: 'ciencia ficción',
         age: 12
       ,rentId:6
      },


    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('articles', null, {});
     
  }
};
