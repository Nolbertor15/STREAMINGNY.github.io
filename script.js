document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { 
            name: "Disney Perfil", 
            price: 12.00, 
            renewal: 12.00, 
            stock: 1, 
            image: "disney.png",
            description: "Servicio de streaming que contiene contenido de STAR+ , DISNEY + CANALES ESPN, CALIDAD DEL SERVICIO EN 4K",
            features: ["Plan Premium", "Resolución 4k", "1 Perfil", "1 Dispositivo","Valido  por 1 mes"]
        },
        { 
            name: "Netflix Perfil", 
            price: 12.00, 
            renewal: 12.00, 
            stock: 1, 
            image: "netflix.png",
            description: "Disfruta de Netflix en calidad 4K (Ultra HD) + HDR con acceso a miles de películas y series.",
            features: ["Plan Premium", "4K (Ultra HD) + HDR", "1 Perfil", "1 Dispositivo","Valido  por 1 mes"]
        },
        { 
            name: "Max Perfil", 
            price: 10.00, 
            renewal: 10.00, 
            stock: 2, 
            image: "max.png",
            description: "Acceso a Max con contenido exclusivo y calidad 4K.",
            features: ["Plan Premium", "4K HDR", "1 Perfil", "1 Dispositivos","Valido por 1 mes"]
        },
        { 
            name: "Prime Video Perfil", 
            price: 10.00, 
            renewal: 9.00, 
            stock: 8, 
            image: "prime.png",
            description: "Mira series y películas en Prime Video sin anuncios y en full HD.",
            features: ["Plan Premium", "Full 4k HDR", "1 Perfil", "1 Dispositivo","Valido por 1 mes"]
        },
        { 
            name: "Paramount + Perfil", 
            price: 10.00, 
            renewal: 10.00, 
            stock: 8, 
            image: "paramount.png",
            description: "Accede a entretenimiento exclusivo en Paramount+ con calidad full HD.",
            features: ["Plan Premium", "Full 4k HDR", "1 Perfil", "1 Dispositivo","Valido por 1 mes"]
        },
        { 
            name: "Apple Tv + Perfil No Iphone(3 Meses)", 
            price: 30.00, 
            renewal: "No Renovable", 
            stock: 8, 
            image: "appletv.png",
            description: "Disfruta series y películas exclusivas en Apple TV+ con calidad HDR.",
            features: ["Plan Premium", "Full 4k HDR", "1 Perfil", "1 Dispositivo","Valido por 3 mes"]
        },
        { 
            name: "Crunchyroll Perfil", 
            price: 10.00, 
            renewal: 9.00, 
            stock: 3, 
            image: "crunchyroll.png",
            description: "Accede a miles de animes sin publicidad con Crunchyroll Premium.",
            features: ["Sin anuncios", "Resolución full HD", "1 Perfil", "1 Dispositivo","Valido por 1 mes"]
        },
        { 
            name: "YouTube Premium", 
            price: 10.00, 
            renewal: 9.50, 
            stock: 3, 
            image: "youtube.png",
            description: "Disfruta de YouTube sin anuncios y con descargas en segundo plano.",
            features: ["Sin anuncios", "Descargas", "YouTube sin conexión", "1 Perfil","Valido por 1 mes"]
        },
        { 
            name: "YouTube Music", 
            price: 10.00, 
            renewal: 9.50, 
            stock: 3, 
            image: "youtubemusic.png",
            description: "Disfruta de YouTube Music sin anuncios y con descargas en segundo plano.",
            features: ["Sin anuncios", "Descargas", "Música sin conexión", "1 Perfil","Valido por 1 mes"]
        },
        { 
            name: "Spotify", 
            price: 13.00, 
            renewal: 13.00, 
            stock: 3, 
            image: "spotify.png",
            description: "Escucha música sin interrupciones en un solo dispositivo.",
            features: ["Sin anuncios", "Descargas", "Música sin conexión", "1 Perfil","Valido por 1 mes"]
        },
        { 
            name: "Apple Music No iphone", 
            price: 15.00, 
            renewal: 15.00, 
            stock: 2, 
            image: "applemusic.png",
            description: "Escucha millones de canciones y descubre nuevos artistas en Apple Music.",
            features: ["Sin anuncios", "Descargas", "Música sin conexión", "1 Perfil","Valido por 1 mes"]
        },
        { 
            name: "Deezer", 
            price: 26.90, 
            renewal: 25.90, 
            stock: 2, 
            image: "Deezer.png",
            description: "Escucha tu música favorita y descubre nuevos sonidos en Deezer.",
            features: ["Sin anuncios", "Descargas", "Música sin conexión", "1 Perfil","Valido por 1 mes"]
        },
        {
            name: "Tidal",
            price: 15.00, 
            renewal: 15.00, 
            stock: 5, 
            image: "tidal.png",
            description: "Disfruta audio en alta fidelidad y descubre música exclusiva en TIDAL.",
            features: ["Sin anuncios", "Descargas", "Música sin conexión", "1 Perfil","Valido por 1 mes"]
       },
       { 
             name: "Directv Go + Liga 1Max", 
             price: 25.00, 
             renewal: 25.00, 
             stock: 2, 
             image: "directv.png",
             description: "Mira TV en vivo, deportes y la Liga 1 Max en DIRECTV GO.",
             features: [  "Acceso a canales en vivo","Liga 1Max en alta calidad", "1 Perfil","Valido por 1 mes"]
       },
       { 
            name: "Movistar Play", 
            price: 20.00, 
            renewal: 20.00, 
            stock: 0, 
            image: "movistarplay.png",
            description: "Disfruta series, películas y TV en vivo en Movistar Play desde cualquier dispositivo.",
            features: [  "Acceso a canales en vivo ","Deportes en alta calidad", "1 Perfil","Valido por 1 mes"]
       },
        { 
            name: "Win TV", 
            price: 17.00, 
            renewal: 17.00, 
            stock: 1, 
            image: "wintv.png",
            description: "Disfruta series, películas y partidos de la Liga 1 en Win TV.",
            features: [  "Acceso a canales en vivo ","Deportes en alta calidad", "1 Perfil","Valido por 1 mes"]
        },
        { 
            name: "Scribd", 
            price: 16.00, 
            renewal: 16.00, 
            stock: 3, 
            image: "scribd.png",
            description: "Accede a libros, audiolibros y documentos ilimitados en Scribd.",
            features: [ "Contenido ilimitados", "Contenido premium", "Lectura sin conexión", "Válido por 1 mes"]
        },
        { 
            name: "ChatGpt", 
            price: 15.50, 
            renewal: 15.50, 
            stock: 3, 
            image: "chatgpt.png",
            description: "Obtén respuestas instantáneas, asistencia en redacción y más con ChatGPT.",
            features: [ "Respuestas precisas", "Generación de texto", "Disponible en varios idiomas", "Válido por 1 mes"]
        },
        { 
            name: "Camva Pro", 
            price: 10.00, 
            renewal: 10.00, 
            stock: 10, 
            image: "Camva.png",
            description: "Diseña como un profesional con herramientas avanzadas y contenido premium en Canva Pro.",
            features: [ "Plantillas premium", "Elimina fondos con un clic", "Colaboración en equipo", "Válido por 1 mes"]
        },
        { 
            name: "Duolingo Plus", 
            price: 10.00, 
            renewal: 10.00, 
            stock: 5, 
            image: "duolingo.png",
            description: "Aprende idiomas de forma divertida y efectiva con Duolingo Plus.",
            features: [ "Acceso sin anuncios", "Lecciones sin conexión", "Vidas ilimitadas ", "Válido por 1 mes"]
        },
        { 
            name: "Aumenta tu alcance en las redes sociales", 
            price: 20.00, 
            renewal: "No Renovable", 
            stock: 5, 
            image: "seguidores.png",
            description: "Aumenta tu alcance en Facebook,Isntagram,tiktok",
            features: [ "1k seguidores", "1k likes", "10k vistas ", "Costo variable por red social"]
        },
        { 
            name: "Busqueda Personas", 
            price: 20.00, 
            renewal:"No renovable", 
            stock: 5, 
            image: "busqueda.png",
            description: "Solo si tiene registrado en el sistema.( SOLO PERUUUUU )",
            features: [ "C4 azul", "Arbol Geneaalogivo", "Telefonos ", "Sueldos,decuncias,etc","Consulta mas informacion"]
        },
    ];

    const productList = document.getElementById("productList");
    const searchInput = document.getElementById("search");
    const stockFilter = document.getElementById("stockFilter");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalFeatures = document.getElementById("modal-features");
    const buyButton = modal.querySelector(".buy-button");
    const closeButton = modal.querySelector(".close");

    function renderProducts() {
        productList.innerHTML = "";
        const searchTerm = searchInput.value.toLowerCase();
        
        products.forEach(product => {
            if ((stockFilter.checked && product.stock > 0) || !stockFilter.checked) {
                if (product.name.toLowerCase().includes(searchTerm)) {
                    const productCard = document.createElement("div");
                    productCard.classList.add("product-card");
    
                    let renewalText = typeof product.renewal === "number" ? `S/. ${product.renewal.toFixed(2)}` : product.renewal;
                    
                    // Definir clase y texto del stock
                    const stockClass = product.stock > 0 ? "available" : "out";
                    const stockText = product.stock > 0 ? `${product.stock} disponibles` : "Sin Stock";
    
                    productCard.innerHTML = `
                        <img src="images/${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p class="price">S/ ${product.price.toFixed(2)}</p>
                        <p class="renewal"><strong>Renovación:</strong> ${renewalText}</p>
                        <p class="stock ${stockClass}">${stockText}</p>
                    `;
    
                    productCard.addEventListener("click", (event) => showModal(product, event));
                    
                    productList.appendChild(productCard);
                }
            }
        });
    }
    
    

    function showModal(product, event) {
        modalTitle.textContent = product.name;
        modalDescription.textContent = product.description;
    
        // Agregar características con checks bien alineados
        modalFeatures.innerHTML = product.features.map(feature => 
            `<li><span class="checkmark">✔</span> ${feature}</li>`
        ).join("");
    
        // Obtener dimensiones y posición exacta del producto
        const rect = event.currentTarget.getBoundingClientRect();
        modal.style.top = `${rect.top + window.scrollY}px`;
        modal.style.left = `${rect.left + window.scrollX}px`;
        modal.style.width = `${rect.width}px`; // Igualar ancho
        modal.style.height = `${rect.height}px`; // Igualar altura
    
        // Asegurar que no exceda el tamaño y permitir scroll si es necesario
        modal.style.overflowY = "auto";
        
         // Redirigir a la página de pago al hacer clic en "Comprar"
    buyButton.onclick = function () {
        const productInfo = `?nombre=${encodeURIComponent(product.name)}&precio=${product.price}&renovacion=${product.renewal}&stock=${product.stock}`;
        window.location.href = `pago.html${productInfo}`;
    };
    
        modal.style.display = "block";
    }
    

    // Cerrar el modal al hacer clic en la "X"
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Filtrar productos
    searchInput.addEventListener("input", renderProducts);
    stockFilter.addEventListener("change", renderProducts);
    
    // Renderizar productos al inicio
    renderProducts();
});
