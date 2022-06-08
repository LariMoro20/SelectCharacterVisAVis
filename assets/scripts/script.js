let characters_list = [
    { id: 1, name: 'Saray', image: './assets/img/characters/1.webp', selected: false },
    { id: 2, name: 'Zulema', image: './assets/img/characters/2.webp', selected: false },
    { id: 3, name: 'Cachinhos', image: './assets/img/characters/3.webp', selected: false },
    { id: 4, name: 'Macarena', image: './assets/img/characters/4.webp', selected: false },
    { id: 5, name: 'Tereza', image: './assets/img/characters/5.webp', selected: false },
    { id: 6, name: 'Anabel', image: './assets/img/characters/6.webp', selected: false },
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
        character_img.src = `./assets/img/characters/${selected_character}.webp`

        //Carrega nome do personagem selecionado
        const character_name = document.getElementById('character-1-name');
        const selected_name = character.getAttribute('data-name');
        character_name.innerHTML = selected_name;

    })
})


