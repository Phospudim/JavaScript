
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente !')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-criançamasculina.png')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src', 'foto-jovemmasculino.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-homemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-criancafeminina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovemfeminina.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-mulheradulta.png')
            } else {
                img.setAttribute('src', 'foto-idosa.png')
            }
        }
        res.computedStyleMap.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} Anos.`
        res.appendChild(img)
    }
}