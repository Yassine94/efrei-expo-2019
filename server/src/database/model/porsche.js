module.exports = (sequelize, DataTypes) => {
	const Porsche = sequelize.define('Porsche', {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
		},
		model: DataTypes.STRING,
		imageURL: DataTypes.STRING,
	});

	Porsche.associate = (models) => {
		Porsche.belongsTo(models.GenericModel, { constraints: false });
	};

	return Porsche;
}