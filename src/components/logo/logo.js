
function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 300 * i)
    });
}

const animationLogo = document.querySelector('h1');
typeWrite(animationLogo);