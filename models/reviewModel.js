module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define("review", {
    rating: {
      type: DataTypes.NUMBER,
      validate: {
        notEmpty: { msg: "Rating is required" },
      },
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: { msg: "Give appropriate info" },
      },
    },
  });

  return Review;
};
