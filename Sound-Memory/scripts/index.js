//Deck

let deck = [
    {
    id: 1,
    name: "frog",
    color: "#84CFFA",
    imagem: "src/frog.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
    },
    {
    id: 2,
    name: "cow",
    color: "#FA8484",
    imagem: "src/cow.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
    },
    {
    id: 3,
    name: "dog",
    color: "#E984FA",
    imagem: "src/dog.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
    },
    {
    id: 4,
    name: "Leão",
    color: "#84FAAC",
    imagem: "src/lion.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
    },
    {
    id: 5,
    name: "Pássaro",
    color: "#8684FA",
    imagem: "src/bird.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
    },
    {
    id: 6,
    name: "elephant",
    color: "#F7FA84",
    imagem: "src/elephant.png",
    descricao: ["descricao 1", "descricao 2", "descricao 3"],
    virado: true,
    },
];

const cards = document.querySelectorAll('.card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let movements = 0;
let winContador = 0;

function flipCard() {
    if (lockBoard) return;
    var animal= this.attributes['data-nome'].value;
    lion = document.getElementById('player' + animal);
    //lion.src =  'src/'  +  + ".mp3";
    lion.play();

    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    console.log(winContador)

    secondCard = this;

    checkForMatch();
}

  //Aynı olup olmadığını kontrol etmek

    function checkForMatch() {
    if(firstCard.dataset.nome !== secondCard.dataset.nome) {
        movements++;
    }
    document.getElementById("movimentos").innerHTML = `${movements}`;
    document.getElementById("movimentos2").innerHTML = `${movements}`;

    if (firstCard.dataset.nome === secondCard.dataset.nome) {
        winContador++;
        disableCards();
      //DEĞİŞTİR* "winContador"un, maçta alınabilecek maksimum galibiyet sayısı olan "6"ya eşit olup olmadığını kontrol eder!
        if(winContador == 6) {
        setTimeout(() => {
            document.querySelector('#vitoria').style.display = 'block'
            document.querySelector('#movimentosvitoria').innerHTML = movements
        }, 1000);
        }
      //SON DEĞİŞİM*
        return;
    }

    unflipCards();

    console.log(movements);

    }

  //Açık kartlara tıklamayı devre dışı bırakma

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        resetBoard();
    }

  //Yanlış kartları geri çevirmek

    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();

        }, 1500);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

  //Karıştırma kartları, Okunur okunmaz yürütmek

    (function shuffle() {
        cards.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style.order = ramdomPos;
        });
    })();

cards.forEach(card => card.addEventListener('click', flipCard));





