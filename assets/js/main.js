let moneyText = document.getElementById('moneyText')
const clickerButton = document.getElementById('clickerButton')

moneyCount = 0
moneyText.innerHTML = `$${moneyCount}`

function addMoney() {
    moneyCount++
    moneyText.innerHTML = `$${moneyCount}`
}

clickerButton.addEventListener('click', addMoney)



// BURGERMENU
const burgermenu = document.getElementById('burgermenu')
const burgerContent = document.getElementById('burgerContent')
const pageWrapper = document.getElementById('pageWrapper')
const upgradesButton = document.getElementById('upgradesButton')
const worldsButton = document.getElementById('worldsButton')
const upgrades = document.getElementById('upgrades')
const worlds = document.getElementById('worlds')
const bgl1 = document.getElementById('bgl1')
const bgl2 = document.getElementById('bgl2')
const bgl3 = document.getElementById('bgl3')

burgermenu.addEventListener('click', () => {
    burgerContent.classList.toggle('active')
    pageWrapper.classList.toggle('active')
    bgl1.classList.toggle('active')
    bgl2.classList.toggle('active')
    bgl3.classList.toggle('active')
})

upgradesButton.addEventListener('click', () => {
    upgrades.classList.add('active')
    worlds.classList.remove('active')
})

worldsButton.addEventListener('click', () => {
    upgrades.classList.remove('active')
    worlds.classList.add('active')
})