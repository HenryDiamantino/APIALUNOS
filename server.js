const express = require("express"); // importa a biblioteca
const app = express(); // cria a aplicação express, para poder chamar na programação só usando "app"

app.use(express.json());

const PORT = 3000

const alunos = [
    {
        id: 1,
        nome: "Sem Ducha",
        cor: "Fedor",
        idade: 4000
    },
        {
        id: 2,
        nome: "João Gay",
        cor: "Gay",
        idade: 2
    },
        {
        id: 3,
        nome: "Henry Lindo",
        cor: "Beleza",
        idade: 17
    },
]

app.get("/",(req, res)=>{
    res.json({
        msg: "João é muito gay"
    })
})

app.get("/alunos", (req, res)=>{
    res.json(alunos);
})

app.get("/alunos/:id", (req, res)=>{
    const id = Number(req.params.id);
    // console.log(`Valor recebido ${id}`);
    const aluno = alunos.filter((aluno)=> aluno.id === id);

    if(aluno.length > 0){
        res.status(200).json(aluno);
    }else{
        res.status(404).json({msg: "Aluno não encontrado"})
    }
})

app.get("/alunos/cor/:cor", (req, res)=>{
    const cor = req.params.cor.toLowerCase();
    console.log(`Cor recebida: ${cor}`);

    const alunosFiltrados = alunos.filter(
        (aluno) => aluno.cor.toLowerCase() === cor
    );
    if (alunosFiltrados.length > 0){
        res.status(200).json(alunosFiltrados);
    }else{
        res.status(404).json({msg: "Nenhum aluno encontrado com essa cor"})
    }
})

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})
