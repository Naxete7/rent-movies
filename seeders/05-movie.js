'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('movies', [
       {
          title: 'El Rey león',
          poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg",
          rank: 10,
          articleId:5,
          createdAt: new Date(),
          updatedAt: new Date()
            },
     {
          title: 'Joker',
          poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v0eQLbzT6sWelfApuYsEkYpzufl.jpg",
       rank: 8,
          articleId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
     {
          title: 'Regreso al futuro',
          poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/ldJzO9D40mCVeDaZQ1986t8rguZ.jpg",
       rank: 7,
          articleId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
     {
          title: 'El club de los poetas muertos',
          poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/rP92uZg0Azxjk9Lj5juRA8TEMR5.jpg",
       rank: 6,
          articleId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
     {
          title: 'Gladiator',
          poster: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/90QFOG5zSN4cbrIVs4DL4ePAuA5.jpg",
       rank: 8,
          articleId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
     {
          title: 'El show de Truman',
          poster: "https://www.themoviedb.org/t/p/w1280/4BGVZSwv5n0hMIAWwiSjMFDQ63K.jpg",
       rank: 7,
          articleId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
     {
          title: 'Coco',
          poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lUZZhYLLDU4g4XGQ5tvjYNVytxc.jpg",
       rank: 8,
          articleId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
     {
          title: 'El señor de los anillos: El retorno del Rey',
          poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mWuFbQrXyLk2kMBKF9TUPtDwuPx.jpg",
       rank: 9,
          articleId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
     {
          title: 'Bohemian Rapsody',
          poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gk6IErM0acV6HJRwKZy8ecBoddc.jpg",
       rank: 7,
          articleId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
     {
          title: 'El gran torino',
          poster: "https://www.themoviedb.org/t/p/w1280/7w54KRHdRokgXqxL59GKVau8e6l.jpg",
       rank: 9,
          articleId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
     {
          title: 'Toy Story',
          poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4bxprr56U0bguis9PgjKTLE08KD.jpg",
       rank: 6,
          articleId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
     {
          title: 'El Gran Showman',
          poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4ssLEvNQ5oM9sJnV6FkDVgOtyAE.jpg",
       rank: 6,
          articleId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
     {
          title: 'Jurassic Park',
          poster: "ttps://www.themoviedb.org/t/p/w600_and_h900_bestv2/lTeTHvfUHEJDK7o3jg06lYi2bLR.jpg",
       rank: 8,
          articleId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
     {
          title: 'El caballero oscuro: La Leyenda renace',
          poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rrS7K8tXVFUBliIKWaRuSq65nWr.jpg",
       rank: 10,
          articleId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
     {
          title: 'La Bella y la Bestia',
          poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1FxMtEUc6DP1MXsTBftOFaoCVVO.jpg",
       rank: 7,
          articleId:5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
     {
          title: 'La princesa prometida',
          poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nHDpaLB6gMKyD8hMtSthtV7yPt9.jpg",
       rank: 5,
          articleId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
     {
          title: 'Tortugas Ninja',
          poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uDJipJy4zwIN9F7stcaTGwfD9yP.jpg",
       rank: 8,
          articleId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
     {
          title: 'Los Goonies',
          poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h0QoQSodfdd3VTBqlFb2QP7wIbL.jpg",
       rank: 9,
          articleId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
     {
          title: 'Rocky',
          poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mQKvObSEYESsDQXFWxfe0FARIP7.jpg",
       rank: 7,
          articleId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
     {
          title: 'Buscando a Nemo',
          poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jTE3BLVCpYaR71L2U8SHV22HvEr.jpg",
       rank: 5,
          articleId:5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
     
    
    
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkDelete('movies', null, {});
     
  }
};
