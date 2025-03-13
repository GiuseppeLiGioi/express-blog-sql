
const express = require ("express");
const router = express.Router();


const arrPosts = require('../data/data.js'); 

const controller = require('../controllers/controller')

  // Index 
router.get('/', controller.index);
  
  // Show
  router.get('/:id', controller.show);
  
  // Store 
  router.post('/', controller.store);
  
  // Update 
  router.put('/:id', controller.update);
  
  // Destroy 
  router.delete('/:id', controller.destroy);
  
  module.exports = router;