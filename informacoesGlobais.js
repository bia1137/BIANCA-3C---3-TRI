const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log (dados);
    const paragrafo document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML= 'voce sabia que o mundo ${dados.total_pesoas_mundo} de pessoas e que aproximadamente ${total_pessoas_conectadas} estao conectadas em alguma rede socual e passam em media ${dados.tempo_medio} horas conectadas.'
    console.log (paragrafo)

    const container = document.getElementById

}
vizualizarInformacoesGlobais