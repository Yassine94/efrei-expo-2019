import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../sequelize.config.js')[env];
const db = {};

const sequelize = env === 'development'
  ? new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  )
  : new Sequelize(config.databaseUrl, config);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;