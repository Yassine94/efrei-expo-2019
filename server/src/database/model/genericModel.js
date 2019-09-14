module.exports = (sequelize, DataTypes) => {
	const GenericModel = sequelize.define('GenericModel', {
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
		},
		model: DataTypes.STRING,
	});

	GenericModel.associate = (models) => {
		GenericModel.hasMany(models.Porsche, { constraints: false });
	};

	return GenericModel;
}
