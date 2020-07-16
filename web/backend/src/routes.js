const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./Controllers/SessionController');
const SpotController = require('./Controllers/SpotController');
const DeshboadController = require('./Controllers/DeshboardController');
const BookingController = require('./Controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

//req.query = Acessa query params (para filtros)
//req.params = Acessa route params (para edicao, delete)
//req.body = Acessa corpo da requisao para criacao e edicao

routes.post('/session',SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots',upload.single('thumbnail'), SpotController.store);

routes.get('/deshboard',DeshboadController.show );

routes.post('/spots/:spot_id/bookings',BookingController.store);

module.exports = routes;