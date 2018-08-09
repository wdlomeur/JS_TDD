function sum(a, b){
    return a + b;
}

//named export
//ter vários exports dentro do mesmo arquivo
//só pode chamar com o mesmo nome
//import precisa das chaves { sub }
export function sub(a, b){
    return a - b;
}

function mult(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

const PI = 3.14;

export { mult as multiplicacao, div, PI };

//Método princial
//Só pode ter um default por arquivo
//importar com qualquer nome
//não precisa usar as chaves
export default sum;