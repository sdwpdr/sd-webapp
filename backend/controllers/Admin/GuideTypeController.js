import GuideTypes from '../../models/GuideTypes.js';

export const createGuideTypes  = async (req, res) => {
  try {
      let info = {
          guideTypes_image: req.file.path || null,
          name: req.body.name,
          guide_id: req.body.guide_id || null,
          description: req.body.description,
      }
    
      const guideTypes = await GuideTypes.create(info);
      res.status(201).json({ message: 'GuideTypes created successfully', guideTypes });

  } catch (error) {
      res.status(500).send('Error creating GuideTypes: ' + error.message);
  }
}
export const getAllguideTypes = async (req, res) => {
    try {
      const guideTypes = await GuideTypes.findAll();
      res.json(guideTypes);
    } catch (error) {
      console.error('Error fetching guides:', error);
      res.status(500).json({ message: 'Failed to fetch guides', error: error.message });
    }
  };

  export const getGuideTypesByGuideId = async (req, res) => {
    const { guide_id } = req.params;
    try {
        const guideTypes = await GuideTypes.findAll({ where: { guide_id } });
        res.json(guideTypes);
    } catch (error) {
        console.error('Error fetching guide types by guide_id:', error);
        res.status(500).json({ message: 'Failed to fetch guide types', error: error.message });
    }
};