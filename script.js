const produtosAmazon = [
  {
    titulo: "Echo Dot 5ª Geração - Smart Speaker Alexa",
    preco: "R$ 279,00",
    desconto: "Desconto de R$70 + frete grátis",
    imagem: "https://m.media-amazon.com/images/I/61XA4ZGvB-L._AC_SX679_.jpg",
    linkAfiliado: "https://www.amazon.com.br/dp/B09B8V8YGV?tag=seulinkafiliado"
  },
  {
    titulo: "Fire TV Stick com Alexa Voice Remote",
    preco: "R$ 199,00",
    desconto: "Promoção relâmpago - 20% off",
    imagem: "https://m.media-amazon.com/images/I/31dZ1v38UHL._AC_.jpg",
    linkAfiliado: "https://www.amazon.com.br/dp/B09QKZVX5J?tag=seulinkafiliado"
  },
  {
    titulo: "Cafeteira Nespresso Essenza Mini",
    preco: "R$ 389,00",
    desconto: "Desconto aplicado no carrinho",
    imagem: "https://m.media-amazon.com/images/I/61GxfSxuXLL._AC_SX679_.jpg",
    linkAfiliado: "https://www.amazon.com.br/dp/B073WVLXJ6?tag=seulinkafiliado"
  }
];

document.getElementById("analisarBtn").onclick = function() {
  const container = document.getElementById("resultados");
  container.innerHTML = "<p>Buscando ofertas na Amazon...</p>";

  setTimeout(() => {
    container.innerHTML = "";
    produtosAmazon.forEach(produto => {
      const div = document.createElement("div");
      div.className = "produto";
      div.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.titulo}" />
        <div>
          <h3>${produto.titulo}</h3>
          <p><strong>Preço atual:</strong> ${produto.preco}</p>
          <p><strong>Oferta:</strong> ${produto.desconto}</p>
          <p><a href="${produto.linkAfiliado}" target="_blank">Divulgar como afiliado</a></p>
        </div>
        <div style="clear: both;"></div>
      `;
      container.appendChild(div);
    });
  }, 1500);
};

document.getElementById("pesquisarBtn").onclick = function() {
  const pesquisa = document.getElementById("pesquisaInput").value.toLowerCase();
  const container = document.getElementById("resultados");
  container.innerHTML = "<p>Buscando produtos...</p>";

  setTimeout(() => {
    container.innerHTML = "";
    const resultadosPesquisa = produtosAmazon.filter(produto => produto.titulo.toLowerCase().includes(pesquisa));

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
            <p><a href="${produto.linkAfiliado}" target="_blank">Divulgar como afiliado</a></p>
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
