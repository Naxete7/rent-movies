'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('rents', [
      
      {
        usuarioId: 1,
      },
       {
        usuarioId: 5,
      },
       {
        usuarioId: 7,
      },
       {
        usuarioId: 8,
      },
       {
        usuarioId: 11,
      },
       {
        usuarioId: 13,
      },
       {
        usuarioId: 2,
      },
       {
        usuarioId: 9,
      },
       {
        usuarioId: 10,
      },
       {
        usuarioId: 3,
      },
       {
        usuarioId: 5,
      },
   
      ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('rents', null, {});
     
  }
};
