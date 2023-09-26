const container = document.querySelector('.container')
const carrossel = document.querySelector('.carousel-inner')



fetch('https://fakestoreapi.com/products?limit=10')
    .then(res => res.json())
    .then(produto => {
        produto.forEach(produto => {
            container.innerHTML += `
            
            <div class="icard">
            <h2 class="titulo">${produto.title}</h2>
            <p><img src="${produto.image}" alt="imagem do produto" class="imagem"></p>
            
            <p class="descricao">${produto.description}</p>
            <hr>
            <p class="preco">R$${produto.price}</p>
            <p><button type="button" class="btn btn-primary">Comprar</button></p>
        </div>
            `
            carrossel.innerHTML += `
            <div class="carousel-item">
                <img src="${produto.image}" class="d-block w-100" alt="...">
            </div>
            `

        })
    })

