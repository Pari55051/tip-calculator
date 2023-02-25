/* These are the 3 functions you must use 👇
========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numPeople = Number(numberOfPeopleDiv.innerText)


function increasePeople () {
    numPeople++
    numberOfPeopleDiv.innerText = numPeople
}

function decreasePeople () {
    if (numPeople > 1) {
        numPeople--
        numberOfPeopleDiv.innerText = numPeople
    }
}

function calculateBill () {
    let billAmount = Number(billInput.value)
    let tipPercent = Number(tipInput.value)

    let billTotal = billAmount + ((tipPercent/100) * billAmount)
    // console.log(billTotal)
    amountPerPerson = Math.round((billTotal / numPeople) * 100) / 100 //rounding off to 2 decimal places
    // console.log(amountPerPerson)
    perPersonTotalDiv.innerText = amountPerPerson
}