const {response}=require('express')

const usuarioGet =  (req, res=response) => {
    res.json({
        msg:'get Api-controller'
    })
  }

const usuarioPost = (req, res=response) => {
    const {Nombres, Apellidos}=req.body;
    res.json({
        msg:'post Api-controller',
        Nombres, 
        Apellidos
    })
  }

  const usuarioPut =(req, res=response) =>{
    res.json({
        msg:'put Api-controller'
    })
  }

  const usuarioDelete =(req, res=response) => {
    res.json({
        msg:'delete Api-controller'
    })
  }


  module.exports={
      usuarioGet,
      usuarioPost,
      usuarioPut,
      usuarioDelete
  }