module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: { msg: "User name can not be empty" },
          len: {
            args: [3, 20],
            msg: "Username must be between 3 and 20 characters",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: { msg: "Must be a valid email address" },
          notEmpty: { msg: "Email can not be empty" },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "Password can not be empty" },
          len: {
            args: [6, 100],
            msg: "Password must be at least 6 characters long",
          },
        },
      },
    },
    {
      timestamps: false,
    }
  );

  return User;
};
