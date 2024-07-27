const { Sequelize } = require("sequelize");

const Product = sequelize.define({
  id: {
    type: Sequelize.uuid,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [10, 100],
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      len: [10, 500],
    },
  },
  price: { type: Sequelize.NUMBER, allowNull: false },
  publishDate: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  published: { type: Sequelize.BOOLEAN, defaultValue: true },
  barCode: {
    type: Sequelize.INTEGER,
    references: {
      model: Bar,
      key: "bar_code",
    },
  },
  comment: {
    type: Sequelize.INTEGER,
    comment: "This is a column name that has a comment",
  },
  status: {
    type: Sequelize.ENUM,
    values: ["running", "completed", "delivered"],
  },
});

module.exports = Product;

const Training = Sequelize.define({
  title: { type: Sequelize.STRING, allowNull: false, unique: true },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      len: [10, 200],
    },
  },
  courseDuration: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  price: { type: Sequelize.NUMBER, allowNull: false },
  category: {
    type: Sequelize.TEXT,
    references: {
      model: Category,
      key: "title",
    },
  },
  published: {
    type: Sequelize.ENUM,
    values: ["Running", "Progress", "Published"],
  },
});
