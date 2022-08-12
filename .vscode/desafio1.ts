// 1:
const funcionario1 = {
    codigo: 10,
    nome: 'John'
};

// 2:
const funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'john'
}

// 3 e 4:
interface Funcionario {  
    codigo: number,
    nome: string
};

const funcionarioObj1 = {} as Funcionario;
funcionarioObj1.codigo = 10;
funcionarioObj1.nome = 'John';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'John'
}