const { Router } = require('express');
const { usuariosPut, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/users.controllers');



const router = Router();

router.get('/', usuariosGet);

router.put('/:id', usuariosPut);

router.post('/', usuariosPost);

router.delete('/', usuariosDelete);

router.patch('/', usuariosPatch);


module.exports = router;