'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert('rentarticles', [
      {
       rentID: 2,
       articleId: 1,
       createdAt: new Date(),
        updatedAt: new Date()
      },
     {
       rentID: 4,
       articleId: 7,
       createdAt: new Date(),
        updatedAt: new Date()
      },
     {
       rentID: 6,
       articleId: 3,
       createdAt: new Date(),
        updatedAt: new Date()
      },
     {
       rentID: 1,
       articleId: 5,
       createdAt: new Date(),
        updatedAt: new Date()
      },
     {
       rentID: 3,
       articleId: 6,
       createdAt: new Date(),
        updatedAt: new Date()
      }], {});
   
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('rentarticles', null, {});
     
  }
};
