'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
    await queryInterface.bulkInsert('series', [
      {
           
         title: 'Dragon Ball Z',
        episode_7_days: false,
          episodes: 291,
          seasons: 9,
          poster: "	https://www.themoviedb.org/t/p/w1280/7yMFXciYDcMle8BjbCsrZ8aqHtw.jpg",
          rank: 10,
          cinema: true,
        theater: false,
        articleId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
  
      },
         {
        title: 'Dragon Ball',
        episode_7_days: false,
        episodes: 153,
        seasons: 1,
        poster: "https://www.themoviedb.org/t/p/w1280/9kK5dRLHbw4QOoFcIAKK2gnOVmx.jpg",
        rank: 10,
        cinema: true,
        theater: false,
        articleId: 5,
        createdAt: new Date(),
          updatedAt: new Date()
      },
            {
       title: 'Castle',
      episode_7_days: false,
      episodes: 173,
      seasons: 8,
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gkXKYjCjjEcRhYPMBLrB4SPPp91.jpg",
      rank: 6,
      cinema: false,
      theater: false,
      articleId: 4,
      createdAt: new Date(),
          updatedAt: new Date()
      },
               {
        title: 'Mentes Criminales',
        episode_7_days: true,
        episodes: 334,
        seasons: 16,
        poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3UyUgPfcs7ByA9hxbhWSW98xdpg.jpg",
        rank: 8,
        cinema: false,
        theater: false,
        articleId: 4,
        createdAt: new Date(),
          updatedAt: new Date()
      },
                  {
        title: 'Supergol',
        episode_7_days: false,
         episodes: 26,
        seasons: 1,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/n4KLsqSXBLsR72gklIVDem1jvpD.jpg",
        rank: 7,
        cinema: false,
         theater: false,
         articleId: 5,
        createdAt: new Date(),
          updatedAt: new Date()
      },
                     {
        title: 'Los Caballeros del Zodiaco',
        episode_7_days: false,
        episodes: 114,
        seasons: 1,
        poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rYp2lHcM5rsdEdzuYA56lk7xBDr.jpg",
        rank: 6,
       cinema: false,
        theater: false,
       articleId: 5,
        createdAt: new Date(),
          updatedAt: new Date()
      },
                        {
        title: 'La casa de papel',
        episode_7_days: false,
        episodes: 41,
        seasons: 3,
        poster: "https://www.themoviedb.org/t/p/w1280/zd8mxIfGY8SlupYd9XvK3qJL91B.jpg",
        rank: 9,
        cinema: true,
        theater: false,
        articleId: 4,
        createdAt: new Date(),
          updatedAt: new Date()
      },
                           {
        title: 'Dartacan y los tres mosqueperros',
        episode_7_days: false,
        episodes: 26,
        seasons: 1,
        poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vEQa7aX3rHWbDbBtWfsEJ8Q5ydx.jpg",
        rank: 6,
        cinema: false,
        theater: false,
        articleId: 5,
        createdAt: new Date(),
          updatedAt: new Date()
      },
                              {
        title: 'Campeones: Oliver y Benji',
        episode_7_days: false,
        episodes: 128,
        seasons: 5,
        poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ylTQ8kWL2Ln5aS4W7r8ajFB5kcp.jpg",
        rank: 9,
        cinema: true,
        theater: false,
         articleId: 5,
        createdAt: new Date(),
          updatedAt: new Date()
      },
                                 {
        title: 'Musculman',
        episode_7_days: false,
        episodes: 183,
        seasons: 2,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8VbmANlFnpgGGljbwFjvKIJJdCW.jpg",
        rank: 7,
        cinema: false,
        theater: false,
        articleId: 5,
        createdAt: new Date(),
          updatedAt: new Date()
      },
                                    {
         title: 'He-man y los Masters del Universo',
        episode_7_days: false,
        episodes: 130,
        seasons: 2,
        poster: "https://www.themoviedb.org/t/p/w1280/g2thtQ6q0A9zVT8waPaECNO6XuD.jpg",
         rank: 9,
        cinema: true,
          theater: false,
          articleId: 5,
        createdAt: new Date(),
          updatedAt: new Date()
      },
                                       {
         title: 'Los Trotamúsicos',
        episode_7_days: false,
        episodes: 26,
        seasons: 1,
        poster: "https://www.themoviedb.org/t/p/w1280/ogorqSGbfxB6Zm1k0k8dIm1BTmg.jpg",
        rank: 9,
        cinema: false,
        theater: true,
         articleId: 5,
        createdAt: new Date(),
          updatedAt: new Date()
      },
           {
        title: 'Juego de tronos',
        episode_7_days: false,
        episodes: 73,
        seasons: 8,
        poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/z9gCSwIObDOD2BEtmUwfasar3xs.jpg",
        rank: 8,
        cinema: false,
        theater: false,
        articleId: 7,
        createdAt: new Date(),
          updatedAt: new Date()
      },
         {
        title: 'La que se avecina',
        episode_7_days: true,
        episodes: 178,
        seasons: 13,
        poster: "	https://www.themoviedb.org/t/p/w600_and_h900_bestv2/76GUieAvgHwH07Yd7kR86iay3dx.jpg",
        rank: 9,
        cinema: true,
        theater: false,
        articleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
   
  
    ], {});
    
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('series', null, {});
     
  }
};
