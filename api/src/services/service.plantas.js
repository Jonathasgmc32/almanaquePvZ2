import {db} from "../config/database.js";

function Listar(FunctionCallback){
    //FunctionCallback(null, {Nome: "nome", custo: 10})
    let sql = "select * from plantas";

    db.all(sql, [], function(err, rows){
        FunctionCallback(err, rows);
    });
}

function Inserir(body, FunctionCallback){
    db.all("insert into plantas(nome, custo, recarga, resistencia, dano, alcance, produtor, tipoProdutor, familia, descricao, imagem, mundo) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) returning id_planta",
    [body.nome, body.custo, body.recarga, body.resistencia, body.dano, body.alcance, body.produtor, body.tipoProdutor, body.familia, body.descricao, body.imagem, body.mundo], function(err, rows){
        FunctionCallback(err, rows);
    });
}

function Editar(id_planta, body, FunctionCallback){
    db.all("update plantas set nome=?, custo=?, recarga=?, resistencia=?, dano=?, alcance=?, produtor=?, tipoProdutor=?, familia=?, descricao=?, imagem=?, mundo=? where id_planta=? returning id_planta",
    [body.nome, body.custo, body.recarga, body.resistencia, body.dano, body.alcance, body.produtor, body.tipoProdutor, body.familia, body.descricao, body.imagem, body.mundo, id_planta], function(err, rows){
        FunctionCallback(err, rows);
    });
}

function Excluir(id_planta, FunctionCallback){
    db.all("delete from plantas where id_planta=? returning id_planta",
    [id_planta], function(err, rows){
        FunctionCallback(err, rows);
    });
}

export default {Listar, Inserir, Editar, Excluir};