import Professional from '../models/Professional';
import ProfessionalType from '../models/ProfessionalType';

class ProfessionalsController {
  async store(req, res) {
    const typeExists = await ProfessionalType.findOne({
      where: { id: req.body.type_profession_id },
    });

    if (!typeExists) {
      return res.status(400).json({ error: 'type of professional not exists' });
    }

    const { id, name } = await Professional.create(req.body);

    return res.json({
      id,
      name,
    });
  }
}

export default new ProfessionalsController();
