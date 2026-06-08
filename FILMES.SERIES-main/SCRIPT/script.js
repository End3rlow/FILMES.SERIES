const filmes = [
    {
        titulo: "Batman Begins",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/7kZTOqogz4Q8kXPsza9slUpcYMW.jpg",
        descricao: "Logo após o assassinato dos seus pais, o herdeiro do império industrial Wayne viaja pelo mundo, procurando meios para lutar contra a injustiça e virar o medo contra aqueles que perseguem os indefesos. No regresso da viagem, Bruce Wayne percebe que pode assumir um alter-ego, o de homem-morcego, um super-herói finalmente capaz de combater as forças do mal e proteger a sua cidade e o mundo.",
    },
    
    {
        titulo: "Batman: O Cavaleiro das Trevas",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/eC3EDsKJwv7RtWhG2aQai6d9jw5.jpg",
        descricao: "Com o Tenente Jim Gordon e o Procurador-geral Harvey Dent, Batman decide destruir o crime organizado. Mas surge um criminoso em ascensão, Joker, que leva Gotham à anarquia e força o Dark Knight a ficar perto de passar de herói a vigilante.",
    },
    {
        titulo: "Batman: O Cavaleiro das Trevas Ressurge",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/w7KDOBOKoZNzZkiKInFBlqo7Cbg.jpg",
        descricao: "Passaram-se oito anos desde que Batman desapareceu na noite tornando-se, nesse momento, de herói a fugitivo. Assumindo a culpa pela morte de Harvey Dent, o Cavaleiro das Trevas sacrificou tudo o que para ele e para o Comissário Gordon era um bem maior. Por um momento a mentira funcionou, pois a atividade criminosa em Gotham City foi destruída graças à Lei anticrime de Dent. Mas tudo muda com a chegada de uma gata silenciosa e astuta, com propósitos misteriosos. Muito mais perigoso, no entanto, é o aparecimento de Bane, um terrorista mascarado cujos planos implacáveis para Gotham City vão fazer Bruce sair do seu autoimposto exílio. Mas mesmo a usar a sua máscara e capa novamente, Batman pode não estar à altura de Bane.",
    },
    {
        titulo: "The Batman",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/wd7b4Nv9QBHDTIjc2m7sr0IUMoh.jpg",
        descricao: "Quando um assassino ataca a elite de Gotham com uma série de máquinas sádicas, um rasto de pistas misteriosas e obscuras levam o Maior Detetive do Mundo a investigar o submundo, onde encontra personagens como Selina Kyle/Catwoman, Oswald Cobblepot/The Penguin, Carmine Falcone, e Edward Nashton/The Riddler. À medida que as provas o encaminham para mais perto de casa e a grandeza do plano do vilão se torna mais clara, Batman tem de forjar novas relações, desmascarar o culpado, e trazer justiça ao abuso de poder e à corrupção que há muito assolam a Cidade de Gotham.",
    },
    {
         titulo: "Sabrina Carpenter: A Nonsense Christmas",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/w6gBjvivsWwTbvz0bBAIxszOnWL.jpg",
        descricao: "O ícone da pop Sabrina Carpenter interpreta canções natalícias no seu primeiro especial de variedades com êxitos de Natal, duetos inesperados e participações cómicas.",
    },
    {
      titulo: "Liga da Justiça",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/m5IpGz6M2QiH4MMWsVj4rfO6iyF.jpg",
        descricao: "Determinado a assegurar que o derradeiro sacrifício do Super-Homem não foi em vão, Bruce Wayne une forças com Diana Prince para recrutar uma equipa e proteger o mundo de uma ameaça de proporções catastróficas." , 
    },
]

const listaFilmes = document.getElementById("listaFilmes");
function mostrarFilmes(lista) {
    listaFilmes.innerHTML = ""
    lista.forEach(filme => {
        listaFilmes.innerHTML += `
            <div class="col-md-4">
                <div class="card card-filme h-100">
                    <img src="${filme.imagem}" class="card-img-top">
                    <div class="card-body">
                        <h3>${filme.titulo}</h3>
                        <p>${filme.descricao}</p>
                        <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}, ${filme.descricao}')">Ver detalhes</button>
                    </div>
                </div>
            </div>    
        `
    })
}



mostrarFilmes(filmes)

function verDetalhes(titulo, descricao) {
        Swal.fire({
            title: titulo,
            text: "Mais informações do filme",
            icon: "info"
        })

        }
