
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: 137, make: "Ford", model: "Taurus", mileage: 30},
        {id: 2, VIN: 100, make: "Subaru", model: "Outback", mileage: 35},
        {id: 3, VIN: 111, make: "Dodge", model: "Challenger", mileage: 20}
      ]);
    });
};
