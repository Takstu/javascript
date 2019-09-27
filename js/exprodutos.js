class Produto{
    constructor(nome, preco, codigo){
        this.nome = nome;
        this.preco = preco;
	this.codigo = codigo;
    }
};

var Produtos=[
    new Produto("Camêra", 114.22, "01"),
    new Produto("Fone de Ouvido", 19.64, "02"),
    new Produto("Xiaomi Redmi", 877.57, "03")
];


var seletor = document.getElementById("produto");

for(let tag of Produtos)
{
    var opt = document.createElement("option");
    opt.value = tag.codigo;
    opt.innerHTML = tag.nome;
    seletor.appendChild(opt);
}

function adicionar(){
	let selecionado = document.getElementById("produto");
	let valor = selecionado.options[selecionado.selectedIndex].value;
	if(valor!="vazio")
	{
		var carrinho = document.getElementById("carrinho");
		let item = document.createElement("DIV");
		for(let i = 0; i<Produtos.length; i++)
		{
			let check = document.getElementById(valor+"quant");
			if( check != null && check != undefined)
			{
				check.value = Number(check.value)+1;
				let total1 = document.getElementById(valor+"quantia");
				total1.value = Number(check.value)*Number(total1.value);
				break;	
			}
			else
			{
				if(Produtos[i].codigo==valor)
				{
					item.id = Produtos[i].codigo;
					item.innerHTML = Produtos[i].nome;
					item.classList.add("itemCarrinho");
					let quantidade = document.createElement("INPUT");
					let quantia = document.createElement("INPUT");
					let qtyLabel = document.createElement("Label");
					qtyLabel.setAttribute("for", quantia);
					qtyLabel.innerHTML = "R$";
					qtyLabel.classList.add("itemCarrinho");
					quantidade.readonly = true;
					quantidade.value = 1;
					quantidade.style.marginLeft = "15px";
					quantidade.style.width = "20px";
					quantidade.classList.add("itemCarrinho");
					quantidade.id=valor+"quant";
					quantia.readonly = true;
					quantia.value = Produtos[i].preco;
					quantia.style.marginLeft = "15px";
					quantia.style.width = "100px";
					quantia.classList.add("itemCarrinho");
					quantia.id=valor+"quantia";
					carrinho.appendChild(item);
					carrinho.appendChild(quantidade);
					carrinho.appendChild(qtyLabel);
					carrinho.appendChild(quantia);
					
				}
				break;
			}
		}
	}
}

function remover(){
	let selecionado = document.getElementById("produto");
	let valor = selecionado.options[selecionado.selectedIndex].value;
	if(valor!="vazio")
	{
		let check = document.getElementById(valor+"quant");
		if( check != null && check != undefined)
		{
			if(Number(check.value)>1)
			{
				check.value = Number(check.value)-1;	
			}
			else
			{
				let prod = document.getElementById(valor);
				prod.parentNode.removeChild(prod);
				check.parentNode.removeChild(check);
			}
		}
	}
}
