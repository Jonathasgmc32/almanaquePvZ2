import sqlite3 from "sqlite3";

const SQLite3 = sqlite3.verbose();

const db = new SQLite3.Database('banco.db', SQLite3.OPEN_READWRITE, function(err){
    if (err){
        return console.log("Erro ao conectar ao banco: " + err.message);
    }
});

export {db};