const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
   const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML= 'voce sabia que o mundo tem <span> ${dados.total_pesoas_mundo} </span> de pessoas e que aproximadamente <span> ${total_pessoas_conectadas} </span> estao conectadas em alguma rede socual e passam em media <span> ${dados.tempo_medio} </span> horas conectadas.'
    console.log (paragrafo)

    const container = document.getElementById ('graficos-container')
    container.appendChild (paragrafo)

}
vizualizarInformacoesGlobais