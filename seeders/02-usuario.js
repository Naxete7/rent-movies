'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('usuarios', [
      
      {
        nombre: 'Luis',
        apellido: 'García Pérez',
        email: 'lugarpe@gmail.com',
        password: 'pegalu123',
         rolId: 1,
        //createdAt: new Date(),
        //  updatedAt: new Date()
      },
      {
        nombre: 'Pepe',
        apellido: 'Navarro Antolin',
         email: 'penalo@gmail.com',
        password: 'penalo123',
         rolId: 1,
        //createdAt: new Date(),
        //  updatedAt: new Date()
      },
      {
        nombre: 'Victor',
        apellido: 'García Valero',
        email: 'ninlleti@gmail.com',
        password: 'vigava93',
         rolId: 1,
        //createdAt: new Date(),
        //  updatedAt: new Date()
      },
      {
        nombre: 'Marina',
        apellido: 'Valero Marin',
        email: 'mavama@gmail.com',
        password: 'valero60',
         rolId: 1,
        //createdAt: new Date(),
        //  updatedAt: new Date()
      },
      {
         nombre: 'Laura',
        apellido: 'Barchino García',
        email: 'labarxi@gmail.com',
        password: 'daniel15',
         rolId: 1,
        //createdAt: new Date(),
        //  updatedAt: new Date()
      },
      {
         nombre: 'Ignacio',
        apellido: 'García Valero',
        email: 'naxete7@gmail.com',
         password: 'xilxes77',
        rolId: 2,
        // createdAt: new Date(),
        //  updatedAt: new Date()
      },
      {
        nombre: 'Javier',
        apellido: 'Flors Mancha',
        email: 'jafloma@hotmail.com',
        password: 'textturas',
         rolId: 1,
        //createdAt: new Date(),
        //  updatedAt: new Date()
      },
      {
         nombre: 'Susana',
        apellido: 'García Esteban',
         email: 'susfm@hotmail.com',
        password: 'fallera09',
         rolId: 1,
        //createdAt: new Date(),
        //  updatedAt: new Date()
      },
      {
          nombre: 'Olivia',
          apellido: 'García Catalá',
          email: 'ogaca@gmail.com',
        password: 'bebe123',
         rolId: 1,
          //createdAt: new Date(),
          //updatedAt: new Date()
      },
      {
         nombre: 'Maite',
          apellido: 'Catalá Muñoz',
          email: 'macamu80@gmail.com',
        password: 'olivia06',
         rolId: 2,
        // createdAt: new Date(),
        //  updatedAt: new Date()
      },
      {
        nombre: 'Luis',
        apellido: 'Dombriz Pérez',
        email: 'ludope@gmail.com',
        password: 'bernabeu93',
        rolId: 1,
        //createdAt: new Date(),
        //  updatedAt: new Date()
      },
      {
        nombre: 'Javier',
        apellido: 'Pons Garcia',
        email: 'japons@gmail.com',
        password: 'ponsito90',
         rolId: 1,
        //createdAt: new Date(),
        //  updatedAt: new Date()
      },
    {
        nombre: 'Leo',
        apellido: 'Messi',
        email: 'goat@gmail.com',
      password: 'pbalondeoro',
       rolId: 2,
        //createdAt: new Date(),
        //  updatedAt: new Date()
      },
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('usuarios', null, {});
     
  }
};
