//Mover el listado de noticias a un archivo .json, ojo con el formato
//Consumir ese archivo json utilizando fetch y pintar el listado de noticias en el index.html

const getJuego2 = async() => {

    const data = await fetch('./data/index.json');
    const juego = await data.json();
    let index = document.querySelector('#index');
    
    juego.forEach( (element) => {
    
        index.innerHTML += `
        <article class="index">
    
            <h3>${ element.title }</h3>
            <img src="./assets/images/${ element.image }.jpg" alt="">
            <p>${ element.description }</p>
            <a href="#">JUGAR</a>
    
        </article> 
    `;
    
    })
}

getJuego2();