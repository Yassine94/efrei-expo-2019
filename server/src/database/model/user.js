module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
		},
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
		company: {
      type: DataTypes.STRING,
      allowNull: false
    },
		city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false
    },
	});

	return User;
}
