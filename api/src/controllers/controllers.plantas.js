import servicePlantas from "../services/service.plantas.js";

function Listar(req, res){
    //res.status(200).send("listar plantas");
    servicePlantas.Listar(function(err, result){
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).json(result);
        }
    });
}

function Inserir(req, res){
    servicePlantas.Inserir(req.body, function(err, result){
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).json(result[0]);
        }
    });
}

function Editar(req, res){
    servicePlantas.Editar(req.params.id_planta, req.body, function(err, result){
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).json(result[0]);
        }
    });
}

function Excluir(req, res){
    servicePlantas.Excluir(req.params.id_planta, function(err, result){
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).json(result[0]);
        }
    });
}

export default {Listar, Inserir, Editar, Excluir};