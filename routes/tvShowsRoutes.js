const {Router} = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validate-fields');
const { CreateTvShow, ReadTvShow, deleteTvShow, updateTvShow } = require('../controllers/tvShowControllers');
const router=Router();

//endpoints
router.post('/newTvShow',[
    check('title').isLength({min:10,max:30}),
    check('year ').isEmpty(),
    check('country').isLength({min:10,max:20})
],CreateTvShow);
router.put('/updateTvShow/:id',updateTvShow);
router.get('/read/:id',ReadTvShow);
router.delete('/delete/:id',deleteTvShow);

module.exports=router;