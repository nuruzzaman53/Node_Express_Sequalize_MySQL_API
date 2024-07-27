module.exports = (sequlize, DataTypes) => {
  const Product = sequlize.define("product", {
    image: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    published: {
      type: DataTypes.BOOLEAN,
    },
  });

  return Product;
};
