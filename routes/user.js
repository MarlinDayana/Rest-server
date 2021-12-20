const {Router}=require('express');
const { usuarioGet, usuarioPost, usuarioPut, usuarioDelete } = require('../controllers/user');

const router= Router();

router.get('/', usuarioGet)

  router.post('/', usuarioPost)

  router.put('/', usuarioPut)

  router.delete('/', usuarioDelete)



  module.exports=router;