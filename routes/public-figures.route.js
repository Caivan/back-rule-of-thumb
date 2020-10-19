const express = require('express');
const router = express.Router();
const publicFiguresController = require ('../controllers/public-figures.controller');

// PUBLIC FIGURE
router.get('/public-figure', publicFiguresController.getAll);
router.get('/public-figure/:id', publicFiguresController.getById);
router.get('/public-figure/random', publicFiguresController.getRandomActive);
router.post('/public-figure', publicFiguresController.create);
router.put('/public-figure/:id', publicFiguresController.update);
router.patch('/public-figure/:id', publicFiguresController.update);
router.delete('/public-figure/:id', publicFiguresController.delete);


module.exports = router;
