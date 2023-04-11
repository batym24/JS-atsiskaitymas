/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const output = document.querySelector('#output')

document.querySelector('.wrapper>form').addEventListener('submit', e => {
    e.preventDefault()
    let kilogramgs = e.target.elements.search.value
    output.innerHTML = ""
    const weigthInPunds = document.createElement('h1')
    weigthInPunds.appendChild(document.createTextNode(`Weight in pounds: ${(parseFloat(kilogramgs) * 2.2046).toFixed(2)} lbs`))
    const weightInGrams = document.createElement('h1')
    weightInGrams.appendChild(document.createTextNode(`Weight in grams: ${(parseFloat(kilogramgs) / 0.0010000).toFixed(2)} g`))
    const weightInOunces = document.createElement('h1')
    weightInOunces.appendChild(document.createTextNode(`Weight in ounces: ${(parseFloat(kilogramgs) * 35.274).toFixed(2)} oz`))

    output.append(weigthInPunds, weightInGrams, weightInOunces)
    document.querySelector('.wrapper>form').reset()
})