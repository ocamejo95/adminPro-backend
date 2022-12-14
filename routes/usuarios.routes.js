/*
Rutas /api/usuarios
 */
const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const {validarJWT} = require('../middlewares/validar-jwt');
const {getUsuarios, createUsuarios, updateUsuarios, deleteUsuarios} = require('../controllers/usuario.controller');

const router = Router();

router.get('/', validarJWT, getUsuarios);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(), validarCampos], createUsuarios);

router.put('/:id', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(), validarCampos], updateUsuarios);

router.delete('/:id', validarJWT, deleteUsuarios);


module.exports = router;
