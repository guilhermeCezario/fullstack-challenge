import Sequelize from 'sequelize';

import ProfessionalType from '../app/models/ProfessionalType';
import Professional from '../app/models/Professional';

import databaseConfig from '../config/database';

const models = [ProfessionalType, Professional];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.forEach((model) => {
      model.init(this.connection);
      if (model.associate) {
        model.associate(this.connection.models);
      }
    });
  }
}

export default new Database();
