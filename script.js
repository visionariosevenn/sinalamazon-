// Lista de produtos
const produtosAmazon = [
  {
    titulo: "Echo Dot 5ª Geração - Smart Speaker Alexa",
    preco: "R$ 279,00",
    desconto: "Desconto de R$70 + frete grátis",
    imagem: "https://m.media-amazon.com/images/I/61XA4ZGvB-L._AC_SX679_.jpg",
    linkProduto: "https://www.amazon.com.br/dp/B09B8V8YGV", // link do produto
    possuiAfiliado: true // Flag que indica que o produto pode ser afiliado
  },
  {
    titulo: "Fire TV Stick com Alexa Voice Remote",
    preco: "R$ 199,00",
    desconto: "Promoção relâmpago - 20% off",
    imagem: "https://m.media-amazon.com/images/I/31dZ1v38UHL._AC_.jpg",
    linkProduto: "https://www.amazon.com.br/dp/B09QKZVX5J",
    possuiAfiliado: true
  },
  {
    titulo: "Cafeteira Nespresso Essenza Mini",
    preco: "R$ 389,00",
    desconto: "Desconto aplicado no carrinho",
    imagem: "https://m.media-amazon.com/images/I/61GxfSxuXLL._AC_SX679_.jpg",
    linkProduto: "https://www.amazon.com.br/dp/B073WVLXJ6",
    possuiAfiliado: false // Produto sem link de afiliado
  },
  {
    titulo: "Fone de Ouvido Bluetooth JBL",
    preco: "R$ 179,00",
    desconto: "Desconto de 15% + frete grátis",
    imagem: "https://m.media-amazon.com/images/I/71VLOZ95-2L._AC_SY355_.jpg",
    linkProduto: "https://www.amazon.com.br/dp/B08MK5S1M9",
    possuiAfiliado: true
  },
  {
    titulo: "Smartphone Samsung Galaxy S21",
    preco: "R$ 3.699,00",
    desconto: "Desconto de R$500 + parcelamento em até 12x",
    imagem: "https://m.media-amazon.com/images/I/71gPVvh1uWL._AC_SY679_.jpg",
    linkProduto: "https://www.amazon.com.br/dp/B08NR41FZ9",
    possuiAfiliado: true
  }
];

// Função para analisar os produtos
document.getElementById("analisarBtn").onclick = function() {
  const container = document.getElementById("resultados");
  container.innerHTML = "<p>Buscando ofertas na Amazon...</p>";

  setTimeout(() => {
    container.innerHTML = "";
    produtosAmazon.forEach(produto => {
      if (produto.possuiAfiliado) {
        const div = document.createElement("div");
        div.className = "produto";
        div.innerHTML = `
          <img src="${produto.imagem}" alt="${produto.titulo}" />
          <div>
            <h3>${produto.titulo}</h3>
            <p><strong>Preço atual:</strong> ${produto.preco}</p>
            <p><strong>Oferta:</strong> ${produto.desconto}</p>
            <p><a href="${produto.linkProduto}" target="_blank">Ir para o produto na Amazon</a></p>
            <p><strong>Como se afiliar:</strong> Acesse o link no grupo para obter o seu link de afiliado e promover o produto!</p>
          </div>
          <div style="clear: both;"></div>
        `;
        container.appendChild(div);
      }
    });
  }, 1500);
};

// Função de busca
document.getElementById("pesquisarBtn").onclick = function() {
  const pesquisa = document.getElementById("pesquisaInput").value.toLowerCase();
  const container = document.getElementById("resultados");
  container.innerHTML = "<p>Buscando produtos...</p>";

  setTimeout(() => {
    container.innerHTML = "";
    const resultadosPesquisa = produtosAmazon.filter(produto => produto.titulo.toLowerCase().includes(pesquisa) && produto.possuiAfiliado);

    if (resultadosPesquisa.length > 0) {
      resultadosPesquisa.forEach(produto => {
        const div = document.createElement("div");
        div.className = "produto";
        div.innerHTML = `
          <img src="${produto.imagem}" alt="${produto.titulo}" />
          <div>
            <h3>${produto.titulo}</h3>
            <p><strong>Preço atual:</strong> ${produto.preco}</p>
            <p><strong>Oferta:</strong> ${produto.desconto}</p>
            <p><a href="${produto.linkProduto}" target="_blank">Ir para o produto na Amazon</a></p>
            <p><strong>Como se afiliar:</strong> Acesse o link no grupo para obter o seu link de afiliado e promover o produto!</p>
          </div>
          <div style="clear: both;"></div>
        `;
        container.appendChild(div);
      });
    } else {
      container.innerHTML = "<p>Nenhum produto encontrado para sua pesquisa.</p>";
    }
  }, 1500);
}
