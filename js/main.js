const array = ['Danone', 'Nestle', 'P&G', 'PepsiCo', 'Unilever', 'Mars'];
console.log(array);
function removeElement(array) {
    return array.filter (el => el !=='P&G');
}
console.log(removeElement(array));