//Inicia player ativo como o 1P
let player_active = '1P'

//Pega todos os elementos da grade de personagens
const characters_html = document.querySelectorAll('.character')

//Percorre lista de personagens e observa clique em cada um
characters_html.forEach((character) => {
    character.addEventListener('click', () => {

        //Pega o id do elemento clicado
        const selected_character = character.attributes.id.value;

        //Remove personagem ativo/padrão
        const select_class = document.querySelector('.character-selected')
        select_class.classList.remove('character-selected')
        character.classList.add('character-selected')

        //Carrega imagem do personagem selecionado no elemento de imagem do personagem do player ativo
        const character_img = document.getElementById(`character-${player_active}-img`);
        character_img.src = `./assets/img/characters/${selected_character}.webp`

        //Carrega nome do personagem selecionado no elemento de nome do personagem do player ativo
        const character_name = document.getElementById(`character-${player_active}-name`);
        const selected_name = character.getAttribute('data-name');
        character_name.innerHTML = selected_name;

        character.innerHTML = '<span class="tag">' + player_active + '</span>'
    })
})

//Pega os botões de alternar player
const button_player = document.querySelectorAll('.choice-player')

//Observa clique nos botões de seleção de jogador
button_player.forEach((button) => {
    button.addEventListener('click', () => {

        //Quando clicado, remove a classe do botão selecionado anteriormente
        //e adiciona a classe ao botão clicado
        const select_class = document.querySelector('.button-selected')
        select_class.classList.remove('button-selected')
        button.classList.add('button-selected')

        //Pega o id do jogador informado no botão clicado
        player_active = button.attributes.id.value

        //Altera texto de player ativo
        const show_button = document.getElementById('show_player');
        show_button.innerHTML = player_active;
    })
})

//Lista de players (para usar futuramente)
/*let characters_list = [
    { id: 1, name: 'Saray', image: './assets/img/characters/1.webp', selected: false },
    { id: 2, name: 'Zulema', image: './assets/img/characters/2.webp', selected: false },
    { id: 3, name: 'Cachinhos', image: './assets/img/characters/3.webp', selected: false },
    { id: 4, name: 'Macarena', image: './assets/img/characters/4.webp', selected: false },
    { id: 5, name: 'Tereza', image: './assets/img/characters/5.webp', selected: false },
    { id: 6, name: 'Anabel', image: './assets/img/characters/6.webp', selected: false },
]*/
