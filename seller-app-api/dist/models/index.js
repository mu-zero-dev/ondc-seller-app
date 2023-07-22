"use strict";

var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _sequelize = _interopRequireDefault(require("sequelize"));
var _config = _interopRequireDefault(require("../lib/config"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var dbConfig = _config["default"].get('database');
var basename = _path["default"].basename(__filename);
var db = {};
var sequelize = new _sequelize["default"](dbConfig.name, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: dbConfig.pool,
  timezone: '+05:30',
  charset: 'utf8',
  collate: 'utf8_general_ci',
  logging: true
});

// Or you can simply use a connection uri
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

_fs["default"].readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  // var model = sequelize['import'](path.join(__dirname, file));

  var model = require(_path["default"].join(__dirname, file))(sequelize, _sequelize["default"].DataTypes);
  db[model.name] = model;
});
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = _sequelize["default"];
//
sequelize.sync({
  alter: true
}).then(function () {
  return console.log('Completed!');
});
module.exports = db;