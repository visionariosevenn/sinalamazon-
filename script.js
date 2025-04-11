async function pesquisarProdutos() {
    const pesquisa = document.getElementById("pesquisaInput").value.toLowerCase();
    const container = document.getElementById("resultados");
    container.innerHTML = "<p>Buscando produtos...</p>";

    // Aqui você precisa chamar o scraping ou a API que você configurou para buscar os produtos.
    // Para simplificar, vamos simular um resultado com a variável 'produtos' obtida no scraping.

    // Exemplo de produtos simulados (retire isso quando for conectar com o seu código de scraping)
    const produtos = [
        { titulo: "Panela de Pressão", preco: "R$ 150,00", imagem: "https://via.placeholder.com/150", linkProduto: "https://www.amazon.com.br/dp/B08L5F1H1V" },
        { titulo: "Panela Elétrica", preco: "R$ 99,90", imagem: "https://via.placeholder.com/150", linkProduto: "https://www.amazon.com.br/dp/B08L5F1H1V" }
    ];

    // Exibir os resultados encontrados
    container.innerHTML = "";
    produtos.forEach(produto => {
        const div = document.createElement("div");
        div.className = "produto";
        div.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.titulo}" />
            <div>
                <h3>${produto.titulo}</h3>
                <p><strong>Preço:</strong> ${produto.preco}</p>
                <p><a href="${produto.linkProduto}" target="_blank">Ir para o produto na Amazon</a></p>
            </div>
            <div style="clear: both;"></div>
        `;
        container.appendChild(div);
    });
}

document.getElementById("pesquisarBtn").onclick = pesquisarProdutos;
