function avisar(){
   

let nome = document.getElementById('nome').value;
if (nome) {
    alert(`Seu nome é: ${nome}`)
} else {
    alert("Digite um nome válido.")
}

}

let botao = document.querySelector("#botao");

botao.addEventListener("click", () =>{
    avisar()
})


