// Initial Data
const menuDisplay = document.querySelector('#options-showcase')
startPage()
// Evets ---------------------------------------

// Functions -----------------------------------
function startPage () {
  const menuInnerHTML = menu.map((item) => {
    // clone the model and configure it as it gets info of a fake API -> available.js
    const newItem = document.getElementById('menu-model').cloneNode(true)

    // Setting the item for the html
    newItem.querySelector('img').src = item.img
    newItem.querySelector('h1').innerHTML = item.title
    newItem.querySelector('h2 span').innerHTML = item.price
    newItem.querySelector('p').innerHTML = item.desc

    // returns the entire html of the element, including the div itself that has all the elements in it
    return newItem.outerHTML
  })

  // Joins the array and adds it to the menuDisplay
  const display = menuInnerHTML.join('')
  menuDisplay.innerHTML = display
}
