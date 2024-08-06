module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "category",
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Category name is required" },
          len: {
            args: [3, 30],
            msg: "Category name should be within 30 characters",
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );

  return Category;
};
