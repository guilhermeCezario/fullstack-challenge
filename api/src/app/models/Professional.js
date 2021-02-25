import Sequelize, { Model } from 'sequelize';

class Professional extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        phone: Sequelize.STRING,
        email: Sequelize.STRING,
        type_profession_id: Sequelize.INTEGER,
        situation: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      },
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.ProfessionalType, {
      foreignKey: 'type_profession_id',
    });
  }
}

export default Professional;
