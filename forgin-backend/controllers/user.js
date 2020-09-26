'use strict';

var User  = require('../models/user');
var province = require('../json_files/province.json');
var canton = require('../json_files/canton.json');
var district = require('../json_files/district.json');

var controller = {

    test: function(req, res){
        return res.status(200).send({
            Message: 'Working fine :)'
        });
    },

    getProvince: function(req, res){

        province = JSON.stringify(province);
        province = JSON.parse(province);
        province = Object.values(province)

        return res.status(200).send({            
            Object: province
        });
    },

    getCanton: function(req, res){
        var idProvince = req.params.id;

        if (idProvince < "1" || idProvince > "7")  return res.status(404).send({message: 'No se encontro la provincia requerida'});

        canton = JSON.stringify(canton);
        canton = JSON.parse(canton);

        canton = Object.values(canton)
            
        var resultados = canton.filter(i => i.Provincia === idProvince);
        
        return res.status(200).send({   Object: resultados });
    },

    getDistrito: function(req, res){
        
        var code= req.params.canton;
        
        district = JSON.stringify(district);
        district = JSON.parse(district);
        district = Object.values(district);

        var resultados = district.filter(i=>i.Canton === code);

        return res.status(200).send({
            Object: resultados 
        });
    },

    saveUser: function(req, res){
        var user = new User();
        var params = req.body;

        console.log(params);
        user.name = params.name;
        user.lastName = params.lastName;
        user.phoneNumber = params.phoneNumber;
        user.email = params.email;
        user.province = params.province;
        user.canton = params.canton;
        user.distric = params.distric;

        user.save((err, userStored) => {
            if (err) return res.status(500).send({ message: 'Error guardando el usuario'});

            if (!userStored) return res.status(404).send({ message: 'No se ha guardado el usuario'});

            return res.status(200).send({User: userStored});
        })
    }
};


module.exports = controller;