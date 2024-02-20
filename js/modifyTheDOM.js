// change tag for h1 header
document.querySelector('h1').innerHTML = '<h1>Most popular Harry Potter characters</h1>'

// change element text of fourth id to Professor Snape
document.getElementById('fourth').innerHTML = 'Professor Snape'

// change element text for the first slytherin class item to Salazar Slytherin
document.getElementsByClassName('slytherin')[0].innerHTML = 'Salazar Slytherin'

// change element text for first list item tag to Dobby
document.getElementsByTagName('li')[0].innerHTML = 'Dobby'

// change background color of body element to dark blue/gray
document.body.style.backgroundColor = '#201F2E'

// change heading class font to Roboto
document.querySelector('.heading').style.fontFamily = 'Roboto'

// Change color of all text to white
document.querySelector('*').style.color = 'white'

// Append new character

let newCharacter = document.createElement('li')
newCharacter.id = 'sixth'
newCharacter.innerHTML = 'Sirius Black'
document.getElementById('character-list').appendChild(newCharacter)

// Remove character
let characterToRemove = document.getElementById('second')
document.getElementById('character-list').removeChild(characterToRemove)

// Change heading color to red on click
let heading = document.querySelector('.heading')

function changeToRed() {
    heading.style.color = 'red'
    heading.style.backgroundColor = 'white'
}

heading.onclick = changeToRed