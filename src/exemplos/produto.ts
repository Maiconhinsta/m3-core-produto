import { Produto } from "../dominio/produto";

const arroz = new Produto("arroz 5 kg", 2490, "un", "mercearia");
console.log(arroz.precoEmReais()); // R$ 24,90
console.log(arroz.precoPorQuantidade(2)); // 49.8


const banana = new Produto("banana", 890, "kg", "hortifruti");
console.log(banana.precoEmReais());

// Caso com dado errado - o tsc pega esse erro:
// const bananaErrada = new Produto("banana", "8,90", "kg", "hortifruti");
// Erro: o preço "8,90" é string, mas o constructor pede number. Tem que ser 890.