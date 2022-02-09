 // https://eth-ropsten.alchemyapi.io/v2/VQiNBTR-0Y0JuBWK1nYoBl0HbvRrFoHb

 require('@nomiclabs/hardhat-waffle');
 module.exports = {
   solidity : '0.8.0',
   networks : {
     ropsten : {
       url : 'https://eth-ropsten.alchemyapi.io/v2/VQiNBTR-0Y0JuBWK1nYoBl0HbvRrFoHb',
       accounts : ['1237924b7b322e202ba7f8939cc5aaaecdd21a7e7bc1bc1376f21d2c1ae23d70']
     }
   }
 }