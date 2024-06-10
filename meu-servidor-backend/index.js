require('dotenv').config();
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_SERVER:', process.env.DB_SERVER);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_PORT:', process.env.DB_PORT);

const express = require('express');
const sql = require('mssql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT),
    options: {
        encrypt: true,  // Use esta opção se estiver utilizando Azure
        enableArithAbort: true
    }
};

sql.connect(dbConfig, err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ', err);
    } else {
        console.log('Conectado ao banco de dados');
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const request = new sql.Request();
        const result = await request.query(`SELECT * FROM appTreino.USUARIO WHERE NM_LOGIN = '${username}' AND SENHA_USUARIO = '${password}'`);
        if (result.recordset.length > 0) {
            res.json({ success: true, message: 'Login realizado com sucesso' });
        } else {
            res.json({ success: false, message: 'Credenciais inválidas' });
        }
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

app.get('/treinos', async (req, res) => {
    try {
        const request = new sql.Request();
        const result = await request.query('SELECT t.MN_TREINO, t.DS_TREINO, t.EXERCICIOS, i.CAMINHO_IMAGEM FROM appTreino.TREINO t JOIN appTreino.IMAGEM as i on (i.ID_IMAGEM = t.ID_IMAGEM)');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

app.get('/usuarios', async (req, res) => {
    try {
        const request = new sql.Request();
        const result = await request.query('SELECT ID_USUARIO, NM_USUARIO, CPF_USUARIO FROM appTreino.USUARIO u WHERE u.ID_TIPO_USUARIO = 1');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}
);


app.post('/newTreino', async (req, res) => {
    const { exercicios, mnTreino, dsTreino } = req.body;

    console.log('Dados recebidos:', { exercicios, mnTreino, dsTreino });
    

    try {
        const pool = await sql.connect(dbConfig);

        // Buscar o maior ID_TREINO atual e incrementá-lo em 1
        const result = await pool.request().query('SELECT MAX(ID_TREINO) AS maxId FROM appTreino.TREINO');
        const maxId = result.recordset[0].maxId;
        const nextId = maxId ? maxId + 1 : 1;

        await pool.request()
        .input('idTreino', sql.Int, nextId)
        .input('exercicios', sql.NVarChar, exercicios)
        .input('idUsuario', sql.Int, 1)
        .input('idImagem', sql.Int, 1)  // ID_IMAGEM fixo em 1
        .input('mnTreino', sql.NVarChar, mnTreino)
        .input('dsTreino', sql.NVarChar, dsTreino)
        .query(`INSERT INTO appTreino.TREINO (ID_TREINO, EXERCICIOS, ID_USUARIO, ID_IMAGEM, MN_TREINO, DS_TREINO) VALUES (@idTreino, @exercicios, @idUsuario, @idImagem, @mnTreino, @dsTreino)`);

        console.log('Treino inserido com sucesso');
        res.status(201).json({ message: 'Treino criado com sucesso' });
    } catch (error) {
        console.error('Erro ao inserir treino:', error);
        res.status(500).json({ message: 'Erro ao inserir treino' });
    }
  });
  

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`);
}).on('error', (err) => {
    console.error('Erro ao iniciar o servidor: ', err);
});
