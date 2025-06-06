var botao = window.document.getElementById("area");
botao.addEventListener("click", clicar);
botao.addEventListener("mouseenter", entrar);
botao.addEventListener("mouseleave", sair);

function clicar() {
    botao.innerText = "Clicou no botão!";
    botao.style.backgroundColor = "blue";
    setTimeout(() => {
        botao.innerHTML = "<p>Aguardando</p>";
        botao.style.backgroundColor = "yellowgreen";
    }, 500);
}

function entrar() {
    botao.innerText = "Entrou o mouse!";
}
function sair() {
    botao.innerText = "Saiu o mouse!";
    setTimeout(() => {
        botao.innerHTML = "<p>Interaja</p>";
    }, 500);
}