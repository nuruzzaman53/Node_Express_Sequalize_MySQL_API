const Sequelize = require("sequelize");

const databaseConfig = new Sequelize("node_sequelize_mysql_api", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    min: 0,
    max: 9,
    acquire: 30000,
    idle: 1000,
  },
});
// You can use the .authenticate() function to test if the connection is OK:
//need to close the connection, call sequelize.close()
databaseConfig
  .authenticate()
  .then(() => console.log("Databse connection successful"))
  .catch((err) => console.error("Unable to connect databse", err));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./models/productModel")(sequelize, DataTypes);
db.reviews = require("./models/reviewModel")(sequelize, DataTypes);

// Instead of calling sync() for every model,
// you can call sequelize.sync() which will automatically sync all models.

// Note: using `force: true` will drop the table if it already exists
db.sequelize
  .sync({ force: false })
  .then(() => console.log("Re-sync done"))
  .catch((error) => console.log(error));

module.exports = db;
