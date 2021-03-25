const { response } = require('express');

const usuariosGet = (req, res = response) => {
    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;
    res.json({
        msg: 'get Api - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: 'post Api - usuariosPost',
        nombre,
        edad

    })
}
const usuariosPut = (req, res = response) => {
    res.json({
        msg: 'put Api - controlador'
    })
}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'path Api - controlador'
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete Api - controlador'
    })
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}