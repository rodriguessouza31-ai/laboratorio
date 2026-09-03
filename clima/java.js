   async function buscarclima(cidade) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${CHAVE_API}&units=metric&lang=pt_br`
    const resposta = await fetch(pr);
    const dados = await resposta.json()
   }

const botaoBuscar = document.getElementById("btnBuscar");
const campoCidade = document.getElementById("cidade");
const divResultado = document.getElementById("resultado");

botaoBuscar.addEventListener("click", async function(){
    const cidade = campoCidade.ariaValueMax;
    
    if (cidade == ""){

    return;
}

const dados = await buscarclima(cidade);

if(dados.cod === "404"){
    divResultado.innerHTML = "<p> Cidade não encontrada.</p>";
    return;
}


divResultado.innerHTML = `
 <div> class= "card-clima">
     <h3>${dados.name}</h3>
     <p>${dados.weather[0].description}</p>
     <p><strong>${dados.main.temp}°C</strong></P>
     <p>Sensação: ${dados.main.fell_like}°C</p>
    </div>

`;




})
