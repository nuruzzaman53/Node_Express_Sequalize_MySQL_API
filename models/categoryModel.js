module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "category",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Category name is required" },
          len: {
            args: [3, 30],
            msg: "Category name should be within 30 characters",
          },
          isUnique: async function (value, next) {
            const category = await Category.findOne({ where: { name: value } });
            if (category) {
              return next("This category is already used");
            }
            next();
          },
        },
      },
      categoryImage: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: { msg: "Category Image required" },
        },
      },
    },
    {
      timestamps: false,
    }
  );

  return Category;
};
