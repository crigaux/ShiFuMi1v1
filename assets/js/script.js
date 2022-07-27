let shifumi = (player1Choice, player2Choice) => {
    let result;

    switch (player1Choice) {
        case 1:
            document.querySelector('.playerChoiceImg').setAttribute('src', './assets/img/rock.jpg');
            break;
        case 2:
            document.querySelector('.playerChoiceImg').setAttribute('src', './assets/img/paper.jpg');
            break;
        case 3:
            document.querySelector('.playerChoiceImg').setAttribute('src', './assets/img/scissors.jpg');
            break;
        case 4:
            document.querySelector('.playerChoiceImg').setAttribute('src', './assets/img/lizard.jpg');
            break;
        case 5:
            document.querySelector('.playerChoiceImg').setAttribute('src', './assets/img/spock.jpg');
            break;
        default:
            break;
    }

    switch (player2Choice) {
        case 1:
            document.querySelector('.computerChoiceImg').setAttribute('src', './assets/img/rock.jpg');
            break;
        case 2:
            document.querySelector('.computerChoiceImg').setAttribute('src', './assets/img/paper.jpg');
            break;
        case 3:
            document.querySelector('.computerChoiceImg').setAttribute('src', './assets/img/scissors.jpg');
            break;
        case 4:
            document.querySelector('.computerChoiceImg').setAttribute('src', './assets/img/lizard.jpg');
            break;
        case 5:
            document.querySelector('.computerChoiceImg').setAttribute('src', './assets/img/spock.jpg');
            break;
        default:
            break;
    }
    
    if((player1Choice == 1 && (player2Choice == 4 || player2Choice == 3)) || 
        (player1Choice == 2 && (player2Choice == 1 || player2Choice == 5)) ||
        (player1Choice == 3 && (player2Choice == 2 || player2Choice == 4)) ||
        (player1Choice == 4 && (player2Choice == 5 || player2Choice == 2)) ||
        (player1Choice == 5 && (player2Choice == 3 || player2Choice == 1))) {
            document.querySelector('.answer > span').textContent = 'Joueur 1 Gagne !';
            result = 'win';
    } else if(player1Choice == player2Choice) {
        document.querySelector('.answer > span').textContent = 'Égalité';
    } else {
        document.querySelector('.answer > span').textContent = 'Joueur 2 Gagne';
        result = 'loose';
    }

    document.querySelector('.answer > span').style.opacity='1';

    return result;
}

let played = document.querySelector('.played');
let win = document.querySelector('.win');
let loose = document.querySelector('.loose');
let winrate = document.querySelector('.winrate');

let player1Answer;
let player2Answer;

document.querySelectorAll('.player1Choice img').forEach(function (element, index) {
    element.addEventListener('click', () => {
        player1Answer = index+1; 
        document.querySelectorAll('.player2Choice img').forEach(function (element, index) {
            element.addEventListener('click', () => {
                player2Answer = index + 1;
                shifumi(player1Answer, player2Answer);
            })
        })  
    })
})

// Overlay Règles du jeu

document.querySelector('.overlay > input').addEventListener('click', () => {
    document.querySelector('.overlay').classList.remove('overlayIn');
    document.querySelector('.overlay').classList.add('overlayOut');
})

document.querySelector('.rules > input').addEventListener('click', () => {
    document.querySelector('.overlay').classList.remove('overlayOut');
    document.querySelector('.overlay').classList.add('overlayIn');
})

// Overlay stats

document.querySelector('.statOverlay').addEventListener('click', () => {
    document.querySelector('.statOverlay').classList.remove('statOverlayIn');
    document.querySelector('.statOverlay').classList.add('statOverlayOut');
})

document.querySelector('.stats > input').addEventListener('click', () => {
    document.querySelector('.statOverlay').classList.remove('statOverlayOut');
    document.querySelector('.statOverlay').classList.add('statOverlayIn');
})


// Bouton reset

document.querySelector('.reset > input').addEventListener('click', () => {
    document.querySelector('.answer > span').style.opacity='0';
    document.querySelector('.computerChoiceImg').setAttribute('src', './assets/img/kripke.png');
    document.querySelector('.playerChoiceImg').src = './assets/img/sheldon.png';
    played.innerHTML = 0; 
    win.innerHTML = 0; 
    loose.innerHTML = 0;
    winrate.innerHTML = 0;
})