const { Sequelize } = require('sequelize');
const databaseConfig = require('../config/database');
const User = require('../app/models/User');
const Student = require('../app/models/Student');

const models = [User, Student];

class Database {
  constructor() {
    this.init();
  }

  // Criar uma conexão com o sequelize
  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

module.exports = new Database();
