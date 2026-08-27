const botaoAbrir = document.getElementById("btnAbrirmodal");
const modalCotainer = document.getElementById("modalContainer");

botaoAbrir.addEventListener("click", function(){

    modalContainer.innerHTML = ` 
    <div class="modal-fundo">
       <div class="modal-caixa">
        <h2>Aviso</h2>
        <p> este modal inteiro foi criado pelo JavaScript.</p>
       <button id= "btnFecharModal">Fecha</button>
       </div>
</div>`;

    const botaoFechar = document.getElementById("btnFecharModal");
    botaoFechar.addEventListener("click", function(){
        modalCotainer.innerHTML = "";
    });
})