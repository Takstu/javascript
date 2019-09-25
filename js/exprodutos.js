class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }
};

var Produtos=[
    new Produto("Camêra", 114.22),
    new Produto("Fone de Ouvido", 19.64),
    new Produto("Xiaomi Redmi", 877.57)
];

var seletor = document.getElementById("produto");

for(let tag of Produtos)
{
    var opt = document.createElement("option");
    opt.value = tag.preco;
    opt.innerHTML = tag.nome;
    seletor.appendChild(opt);
}