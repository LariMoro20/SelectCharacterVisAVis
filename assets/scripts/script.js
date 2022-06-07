let characters_list = [
    { id: 1, name: 'Saray', image: './assets/img/1.png', selected: false },
    { id: 2, name: 'Zulema', image: './assets/img/2.png', selected: false },
    { id: 3, name: 'Cachinhos', image: './assets/img/3.png', selected: false },
    { id: 4, name: 'Macarena', image: './assets/img/4.png', selected: false },
    { id: 5, name: 'Tereza', image: './assets/img/5.png', selected: false },
    { id: 6, name: 'Anabel', image: './assets/img/6.png', selected: false },
]

//Pega todos os elementos de personagens
const characters_html = document.querySelectorAll('.character')

//Percorre lista
characters_html.forEach((character) => {
    character.addEventListener('click', () => {
        //Pega o id do elemento clicado
        const selected_character = character.attributes.id.value;

        //Remove personagem ativo/padrão
        const select_class = document.querySelector('.character-selected')
        select_class.classList.remove('character-selected')
        character.classList.add('character-selected')

        //Carrega imagem do personagem selecionado
        const character_img = document.getElementById('character-1-img');
        character_img.src = `./assets/img/${selected_character}.png`

        //Carrega nome do personagem selecionado
        const character_name = document.getElementById('character-1-name');
        const selected_name = character.getAttribute('data-name');
        character_name.innerHTML = selected_name;

    })
})


