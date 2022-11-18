'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('usuario', [
      
      {
        nombre: 'Luis García Pérez',
        email: 'lugarpe@gmail.com',
        password: 'pegalu123',
         rolId: 1,
        createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        nombre: 'Pepe Navarro Antolin',
         email: 'penalo@gmail.com',
        password: 'penalo123',
         rolId: 1,
        createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        nombre: 'Victor García Valero',
        email: 'ninlleti@gmail.com',
        password: 'vigava93',
         rolId: 1,
        createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        nombre: 'Marina Valero Marin',
        email: 'mavama@gmail.com',
        password: 'valero60',
         rolId: 1,
        createdAt: new Date(),
          updatedAt: new Date()
      },
      {
         nombre: 'Laura Barchino García',
        email: 'labarxi@gmail.com',
        password: 'daniel15',
         rolId: 1,
        createdAt: new Date(),
          updatedAt: new Date()
      },
      {
         nombre: 'Ignacio García Valero',
        email: 'naxete7@gmail.com',
         password: '$2b$10$yam9cBd4Qpcs51yEFuf91.leIptYDaK.mnhLqPAIuJvHaOYVhJlo.', //'xilxes77'
        rolId: 2,
         createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        nombre: 'Javier Flors Mancha',
        email: 'jafloma@hotmail.com',
        password: 'textturas',
         rolId: 1,
        createdAt: new Date(),
          updatedAt: new Date()
      },
      {
         nombre: 'Susana García Esteban',
         email: 'susfm@hotmail.com',
        password: 'fallera09',
         rolId: 1,
        createdAt: new Date(),
          updatedAt: new Date()
      },
      {
          nombre: 'Olivia García Catalá',
          email: 'ogaca@gmail.com',
        password: '$2b$10$0yfY7KBhP0fz6wjxCkN8fe0eON9I.WD0Bcgst/QVFlZGv5YJmLkoK', //'bebe123'
         rolId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
      },
      {
         nombre: 'Maite Catalá Muñoz',
          email: 'texu80@gmail.com',
        password: '$2b$10$mnpWPSjI7nVPRaVO3gZ1ZuwL.hFGTCes3X.QDwoyu87lkau/wrOB2', //'olivia06'
         rolId: 2,
         createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        nombre: 'Luis Dombriz Pérez',
        email: 'ludope@gmail.com',
        password: 'bernabeu93',
        rolId: 1,
        createdAt: new Date(),
          updatedAt: new Date()
      },
      {
        nombre: 'Javier Pons Garcia',
        email: 'japons@gmail.com',
        password: 'ponsito90',
         rolId: 1,
        createdAt: new Date(),
          updatedAt: new Date()
      },
    {
        nombre: 'Leo Messi',
        email: 'goat@gmail.com',
      password: '$2b$10$QRZzf0gpGsQnAQBjViea1.0QaV0zYzTVqOwginpjPZtnbLlO9Q.4K', //'balondeoro'
       rolId: 1,
        createdAt: new Date(),
          updatedAt: new Date()
      },
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('usuario', null, {});
     
  }
};
