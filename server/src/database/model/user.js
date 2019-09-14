module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
		},
		company: DataTypes.STRING,
		city: DataTypes.STRING,
	});

	return User;
}
