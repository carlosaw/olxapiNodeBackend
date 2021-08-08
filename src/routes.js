const express = require('express');
const router = express.Router();

const Auth = require('./middlewares/Auth');

const AuthValidator = require('./validators/AuthValidator');
const UserValidator = require('./validators/UserValidator');

const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const AdsController = require('./controllers/AdsController');

router.get('/ping', (req, res)=>{
    res.json({pong: true});
});
// Listar os estados
router.get('/states', UserController.getStates);
// Login e cadastro
router.post('/user/signin', AuthValidator.signin, AuthController.signin);
router.post('/user/signup', AuthValidator.signup, AuthController.signup);
// Informações do usuário - Pegar e Editar
router.get('/user/me', Auth.private, UserController.info);
router.put('/user/me', UserValidator.editAction, Auth.private, UserController.editAction);
// Listar categorias
router.get('/categories', AdsController.getCategories);
// Adicionar/Listar/Pegar/Editar um anuncio
router.post('/ad/add', Auth.private, AdsController.addAction);
router.get('/ad/list', AdsController.getList);
router.get('/ad/item', AdsController.getItem);
router.post('/ad/:id', Auth.private, AdsController.editAction);

module.exports = router;