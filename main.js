'mode strict'

const links = {
    "nome": "Gustavo Marques Fernandes",
    "img": "./imagens/gustavo.jpeg",
    "links": [
        {
            "titulo": "Github",
            "url": "https://github.com/Gustavo6713?tab=repositories"
        },
        {
            "titulo": "youtube",
            "url": "https://www.youtube.com/fernandoleonid"
        },
        {
            "titulo": "linkedin",
            "url": "https://www.linkedin.com/in/gustavo-marques-303a60207"
        },
        {
            "titulo": "twitter",
            "url": "https://twitter.com/Gustavom713"
        }
    ]
}

const moana = document.getElementById('gustavo');
moana.src = links.img;

const titulo = document.getElementById('gustavo');
titulo.textContent = links.nome;

const  site = document.getElementsByTagName('a')[0];
site.textContent = links.links[0].titulo;
site.href = links.links[0].url;

const  youtube = document.getElementsByTagName('a')[1];
youtube.textContent = links.links[1].titulo;
youtube.href = links.links[1].url;

const  linkedin = document.getElementsByTagName('a')[2];
linkedin.textContent = links.links[2].titulo;
linkedin.href = links.links[2].url;

const  twitter = document.getElementsByTagName('a')[3];
twitter.textContent = links.links[3].titulo;
twitter.href = links.links[3].url;




