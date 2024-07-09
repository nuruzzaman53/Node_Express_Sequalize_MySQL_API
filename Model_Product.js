const Product = sequelize.define({
  title: { type: Sequelize.STRING, allowNull: false },
  description: { type: Sequelize.TEXT, allowNull: false },
  price: { type: Sequelize.NUMBER, allowNull: false },
  published: { type: Sequelize.BOOLEAN },
});

module.exports = Product;
