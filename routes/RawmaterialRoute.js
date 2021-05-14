const express = require('express');
const rawMaterialController = require('../controllers/RawmaterialController');

const router = express.Router();

router.post('/addmaterial',rawMaterialController.addRawmaterial);
router.get('/rawmaterials', rawMaterialController.getRawmaterials);


module.exports = router;