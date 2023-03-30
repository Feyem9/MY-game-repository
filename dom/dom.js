// Remplace le contenu de la balise body
const body = document.body;
document.body.innerHTML = '<h1>I change the body with this title !</h1>'

// Appliquer des styles au body
document.body.style.color = 'red';
document.body.style.fontSize = '60px';


// dans notre body presentement nous n'avons pas de balise.
// si nous avions nous serions en train de voir le changement.


// Get the paragraph with id second
const secondElem = document.getElementbyId('second');

// Alter both its content and style
secondElem.innerHTML = '<em>Je modifie son contenu</em> et son style';
secondElem.style.fontWeight = 'bold';
secondElem.style.color = 'red';

console.log(secondElem);


// Get all the button element
const allButtons = document.getElementsbyTagName('button');

// Alter the button's style with loop beacause the variable is an array
for(let i = 0; i < allButtons.length ; i++){
    allButtons[i].style.backgroundColor = 'yellow';
}
console.log(allButtons);

// Get all elements having the class "red"
const allWithRed = document.getElementsByClassName('red');
for(let i = 0; i < allWithRed.length; i++){
    allWithRed[i].style.color = 'red';
}


// Récupérer le bouton
const firstButton = document.getElementById('button1');
// Initialiser un compteur
let count = 0;
// Attacher un event listener pour l'évènement click
firstButton.addEventListener('click', () => {
    count += 1;
    const text = "J'ai cliqué " + count + "fois";
    firstButton.innerHTML = text;
});
console.log(text);



	

const choiceSpan = document.getElementById('show-shoice');
const selectors = document.getElementByTagName('select');

for(let i = 0; i < selectors.length; i++){
    selectors[i].addEventListener('change', event => {
        // event.target contient une référence 
        // vers l'élément qui a déclenché l'event
        choiceSpan.innerHTML = event.target.value;
    });
}
console.log(choiceSpan);