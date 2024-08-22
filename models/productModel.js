module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("product", {
    image: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "Product image is required" },
      },
    },
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "Product title is required" },
        len: {
          args: [10, 150],
          msg: "Product title should within 159 characters",
        },
      },
    },
    category: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: "Category is required" },
      },
    },

    price: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: { msg: "Product price is required" },
      },
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: { msg: "Product description is required" },
        len: {
          args: [10, 350],
          msg: "Product title should within 350 characters",
        },
      },
    },
    published: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: { msg: "Please check product visibility" },
      },
    },
  });
  return Product;
};
