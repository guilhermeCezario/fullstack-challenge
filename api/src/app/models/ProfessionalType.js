import Sequelize, { Model } from 'sequelize';

class ProfessionalType extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        phone: Sequelize.STRING,
        situation: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

export default ProfessionalType;
