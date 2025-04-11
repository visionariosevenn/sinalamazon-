async function searchAndAnalyze() {
    const query = document.getElementById('searchQuery').value;

    if (!query) {
        alert('Por favor, digite um produto para pesquisar!');
        return;
    }

    const products = await buscarProdutosAmazon(query);

    displayProducts(products);
}

async function buscarProdutosAmazon(query) {
    // Simulando a resposta do scraping (use Puppeteer ou outra abordagem para pegar dados reais)
    const products = [
        {
            titulo: 'Panela de Pressão 5L',
            preco: 'R$ 199,99',
            imagem: 'https://m.media-amazon.com/images/I/61BvQd9OVZL._AC_SX679_.jpg',
            linkProduto: 'https://www.amazon.com.br/dp/B08L5F1H1V'
        },
        {
            titulo: 'Panela Elétrica',
            preco: 'R$ 149,90',
            imagem: 'https://m.media-amazon.com/images/I/61kHg8h3tiL._AC_SX679_.jpg',
            linkProduto: 'https://www.amazon.com.br/dp/B08H4P4P24'
        }
    ];

    return products;
}

function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Limpa o conteúdo anterior

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="${product.imagem}" alt="${product.titulo}">
            <h3>${product.titulo}</h3>
            <p>${product.preco}</p>
            <a href="${product.linkProduto}" target="_blank">Ver Produto</a>
        `;

        productList.appendChild(productDiv);
    });
}
