'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('rentarticles', [{
       rentID: 2,
       articleId: 1,
       createdAt: new Date(),
        updatedAt: new Date()
      }], {});
   
  },

  async down (queryInterface, Sequelize) {
   
      await queryInterface.bulkDelete('rentarticles', null, {});
     
  }
};
