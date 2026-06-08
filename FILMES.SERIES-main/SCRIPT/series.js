const series = [
    {
        titulo: "Jessie",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/tspQe0FuiaUj0U1R1norNbiYTe4.jpg",
        descricao: "As aventuras de uma garota do Texas que se muda para Nova York e se torna babá das crianças ricas e precoces da família Ross.",
    },
    
    {
        titulo: "O Mandaloriano",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
        descricao: "A saga de um guerreiro solitário, que também é um mercenário e pistoleiro, viajando pelos territórios esquecidos e marginais do espaço, logo após a queda do Império e antes da criação da temida Primeira Ordem..",
    },
    {
        titulo: "Star Wars: The Clone Wars",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/pvDFqSHSdyWiPu0ihJJkDXxnBM9.jpg",
        descricao: "A guerra dos clones se expande por toda a galáxia, e os heróis Jedi lutam desesperadamente a fim de manter a ordem e a paz. Sistemas sucumbem perante o lado negro da força e a República Galáctica está sofrendo contínua pressão dos Separatistas e seu infinito exército de dróides.",
    },
    {
        titulo: "Death Note",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/tCZFfYTIwrR7n94J6G14Y4hAFU6.jpg",
        descricao: "Light Yagami é um estudante brilhante que se encontra aborrecido. Um dia, encontra um Death Note, um caderno que pertence a um Shinigami (Deus da Morte). Esse caderno mortal tem o poder de matar qualquer um cujo nome seja nele escrito e, usando esse poder, Light decide criar um mundo perfeito, livre de crimes e pessoas maldosas. No entanto, à medida que os mais temidos criminosos aparecem mortos, a Interpol chama o lendário detective L para apanhar Light. Começa aí uma batalha.",
    },
    {
         titulo: "The Boys",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/in1R2dDc421JxsoRWaIIAqVI2KE.jpg",
        descricao: "Na trama, conhecemos um mundo em que super-heróis são as maiores celebridades do planeta, e rotineiramente abusam dos seus poderes ao invés de os usarem para o bem.",
    },
    {
      titulo: "Stranger Things",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/twfKp60THrcOIep9sjHODOOfO8d.jpg",
        descricao: "Quando um garoto desaparece, a cidade toda participa nas buscas. Mas o que encontram são segredos, forças sobrenaturais e uma menina." , 
    },
]

const listaSeries = document.getElementById("listaSeries");
function mostrarSeries(lista) {
    listaSeries.innerHTML = ""
    lista.forEach(series => {
        listaSeries.innerHTML += `
            <div class="col-md-4">
                <div class="card card-series h-100">
                    <img src="${series.imagem}" class="card-img-top">
                    <div class="card-body">
                        <h3>${series.titulo}</h3>
                        <p>${series.descricao}</p>
                        <button class="btn btn-dark" onclick="verDetalhes('${series.titulo}, ${series.descricao}')">Ver detalhes</button>
                    </div>
                </div>
            </div>    
        `
    })
}



mostrarSeries(series)

function verDetalhes(titulo, descricao) {
        Swal.fire({
            title: titulo,
            text: "Mais informações da série",
            icon: "info"
        })

        }
