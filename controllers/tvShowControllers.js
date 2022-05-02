const {response}=require('express');
const TvShow=require('../models/tvShows');

//functions:
const CreateTvShow=async(req,res=response)=>{
    
   const {
  title,
  year,
  country,
  summary
}=req.body;
    try{
        const tvSh=await TvShow.findOne({title});
        if(tvSh){
            return res.status(400).json({Ok:false,mensaje:'Éste TvShow ya está registrado.'});
        }
        let dbTvSh=new TvShow(req.body);
        await dbTvSh.save();
        return res.status(201).json({Ok:true,mensaje:'TvShow Registrado exitosamente.'});
    }catch(error){
        console.log(error);
        return res.status(500).json({Ok:false,mensaje:'Error interno del servidor.'});
    } 
}
const ReadTvShow=async(req,res=response)=>{
    try{
    const tvSh=await TvShow.findById(req.params.id);
    if(tvSh){
        return res.status(200).json({Ok:true,ResultadoBusqueda:tvSh});
    }else{
        return res.status(404).json({Ok:false,mensaje:'TvShow no encontrado.'});
    }
    }catch(error){
        console.log(error);
        return res.status(500).json({Ok:false,mensaje:'Error interno del servidor.'});
    }    
}
const deleteTvShow=async(req,res=response)=>{
    try{
        const tvSh=await TvShow.findById(req.params.id);
        if(tvSh){
            tvSh.remove();
            return res.status(200).json({Ok:true,mensaje:'TvShow eliminado exitosamente.'});
        }else{
            return res.status(404).json({Ok:false,mensaje:'TvShow no encontrado.'});
        }
    }catch(error){
        console.log(error);
        return res.status(500).json({Ok:false,mensaje:'Error interno del servidor.'})
    }
}

const updateTvShow=async(req,res=response)=>{
    try{
        const tvS=await TvShow.findById(req.params.id);
        if(tvS){
            tvS.title=req.body.title;
            tvS.year=req.body.year;
            tvS.country=req.body.country;
            tvS.save()
            return res.status(201).json({Ok:true,mensaje:'TvShow actualizado exitosamente.'});
        }else{
            return res.status(404).json({Ok:false,mensaje:'TvShow no encontrado.'});
        }
    }catch(error){
        console.log(error); 
        return res.status(500).json({Ok:false,mensaje:'Error interno del servidor.'})
    }
}

module.exports={
    CreateTvShow,
    ReadTvShow,
    updateTvShow,
    deleteTvShow
}   