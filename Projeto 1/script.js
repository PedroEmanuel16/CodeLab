let imagem1 = document.querySelector('.imagemCoracao1')

imagem1.addEventListener('click', function(){
    let srcImagem = imagem1.getAttribute('src')
    if (srcImagem == 'icon-heart-active.png'){
        imagem1.setAttribute('src', 'icon-heart.png')

    } else{
        imagem1.setAttribute('src', 'icon-heart-active.png')
    }
    
})

let imagem2 = document.querySelector('.imagemCoracao2')

imagem2.addEventListener('click', function(){
    let srcImagem = imagem2.getAttribute('src')
    if (srcImagem == 'icon-heart-active.png'){
        imagem2.setAttribute('src', 'icon-heart.png')
    } else{
        imagem2.setAttribute('src', 'icon-heart-active.png')
    }
    
})

let imagem3 = document.querySelector('.imagemCoracao3')

imagem3.addEventListener('click', function(){
    let srcImagem = imagem3.getAttribute('src')
    if (srcImagem == 'icon-heart-active.png'){
        imagem3.setAttribute('src', 'icon-heart.png')
    } else{
        imagem3.setAttribute('src', 'icon-heart-active.png')
    }
    
})


function trocarBorda(id){
    let borda = document.getElementById(id)
    let borda_status = borda.className
    
    if (borda_status == 'parte-favoritada') {
        borda.classList.remove('parte-favoritada')
        borda.classList.add('partes')
    } else {
        borda.classList.remove('partes')
        borda.classList.add('parte-favoritada')
    }
}