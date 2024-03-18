document.querySelector(".butao").addEventListener("click", () => {
    pegarIdEexibirConselhos()
})

async function gerarConselho (){
    const url = 'https://api.adviceslip.com/advice'
    const resposta = await fetch(url)
    return await resposta.json()
}

async function selecionarConselho(id){
    const url = `https://api.adviceslip.com/advice/${id}`
    const resposta = await fetch(url)
    return await resposta.json()
}

async function pegarIdEexibirConselhos(){
    const conselho = await gerarConselho()
    const id = await selecionarConselho(conselho.slip.id)
    document.querySelector('.titulo').innerHTML = `<h1>Advice #${id.slip.id}</h1>`
    document.querySelector('.conselho').innerHTML = `<p>"${id.slip.advice}"</p>`
}

pegarIdEexibirConselhos()


