
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl
        .integer('VIN')
        .notNullable()
        .index()
  
        tbl
        .string('make', 128)
        .notNullable();
  
        tbl
        .string('model', 128)
        .notNullable();
  
        tbl
        .integer('mileage')
        .notNullable();
  
        tbl
        .string('trans-type', 128);
        
        tbl
        .string('status', 128)
    })
};
//VIN, make, model, mileage, transmission-type, status
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
