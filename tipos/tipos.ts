// string
let nome: string = 'João';
console.log(nome);
// nome = 28 -> Não é possível, por se tratar de que o ts é inferido altomaticamente.

// numbers
let idade: number = 27;
// idade = 'Ana' -> Também não é possível de igual forma
idade = 27.5;
console.log(idade);

// boolean
let possuiHobbies: boolean = false;
// possuiHobbies = 1 -> Também não é possível de igual forma
console.log(possuiHobbies);

// array
let hobbies : any[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100];
//hobbioes = 100-> Também não é possível de igual forma;
console.log(hobbies);

// tuplas
let endereco: [string, number] = ["Av Principal", 99];
console.log(endereco);

// enums
enum Cor {
    Cinza,
    Verde = 100,
    Azul = 10,
    Laranja,
    Amarelo,
    Vermelho = 100
};

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Vermelho);