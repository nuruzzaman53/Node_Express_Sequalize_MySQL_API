module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "node_sequelize_mysql_api",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 50000,
    idle: 10000,
  },
};
