import ProfessionalType from '../models/ProfessionalType';

class ProfessionalTypesController {
  async store(req, res) {
    const { id, description } = await ProfessionalType.create(req.body);

    return res.json({
      id,
      description,
    });
  }
}

export default new ProfessionalTypesController();
