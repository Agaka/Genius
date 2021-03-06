let order = []
let clickedOrder = []
let score = 0

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

const shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order.push(colorOrder)
    clickedOrder = []

    for(let i in order) {
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}

const lightColor = (element, number) => {
    number = number * 500
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250)
    setTimeout(() => {
        element.classList.remove('selected')
    }, number)
}

const checkOrder = () => {
    for(let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver()
            break   
        }
    }
    if (clickedOrder.length == order.length) {
        setTimeout(() => {
            alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nivel`)
            nextLevel()
        }, 400)
    }
}

const click = (color) => {
    clickedOrder.push(color)
    createColorElement(color).classList.add('selected')
    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
    }, 100)
    checkOrder()
}

const createColorElement = (color) => {
    switch (color) {
        case 0:
            return green 
            break
        case 1: 
            return red 
            break
        case 2:
            return yellow 
            break
        case 3:
            return blue 
            break
    }
}

const nextLevel = () => {
    score++
    shuffleOrder()
}

const gameOver = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo\nClique em Ok para iniciar um novo jogo`)
    order = []
    clickedOrder = []

    playGame()
}

const playGame = () => {
    alert(`Bem vindo ao Genius! Iniciando um novo jogo`)
    score = 0
    nextLevel()
}

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame()