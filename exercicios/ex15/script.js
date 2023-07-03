function contar() {
    let ini = document.getElementById('contari');
    let fim = document.getElementById('fimi');
    let passo = document.getElementById('passoi');
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = `Contando:`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (1 < f) {
            //contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //contagem regressiva
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}
