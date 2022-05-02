const {Router} = require('express');
const { check } = require('express-validator');
// const { validarCampos } = require('../middlewares/validate-fields');
const { CreateTvShow, ReadTvShow, deleteTvShow, updateTvShow } = require('../controllers/tvShowControllers');
const router=Router();

//endpoints
router.post('/newTvShow',CreateTvShow);
router.put('/updateTvShow/:id',updateTvShow);
router.get('/read/:id',ReadTvShow);
router.delete('/delete/:id',deleteTvShow);

module.exports=router;