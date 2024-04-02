'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = {
      name: "Toyota Test",
      size: "small",
      rent_per_day: 120000,
      image_id: 1,
      image_url: "https://res.cloudinary.com/dmn8e3ma2/image/upload/v1711973493/xzjvo9qbi5d56x6sdzd1.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    const arrData = []
    const n = 5;
    for (let i = 0; i < n; i++) {
      arrData.push(data)
    }
    return queryInterface.bulkInsert('Cars', arrData);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cars', null, {});
  }
};
