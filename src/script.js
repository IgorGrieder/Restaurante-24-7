// Initial Data
const menuDisplay = document.querySelector('#options-showcase')
const cartBox = document.getElementById('cart-box')
const cartArea = document.getElementById('cart-area')
const cancelCart = document.getElementById('cancel-cart')
const modal = document.getElementById('modal-area')
const cancelModal = document.getElementById('cancel-modal')
const quantityModal = document.getElementById('modal-quantity')
const quantityPlusModal = document.getElementById('plus-modal')
const quantityMinusModal = document.getElementById('minus-modal')
startPage()

// Variables to control information about the user interaction
const cartItems = []
let modalCurrent = null
let modalCount = 1

// Evets ---------------------------------------

// Open the cart
cartBox.addEventListener('click', () => {
  // First verify the size of the screen ----- above 640px block and below flex
  // TO DO: update cart every time its oppened
  if (window.innerWidth > 640) {
    // Close the cart if you click on it again
    if (cartArea.classList.contains('sm:block')) {
      cartArea.classList.remove('sm:block')
      cartArea.classList.add('sm:hidden')
    } else {
      cartArea.classList.remove('sm:hidden')
      cartArea.classList.add('sm:block')
    }
  } else {
    cartArea.classList.remove('hidden')
    cartArea.classList.add('flex')
  }
})

// Close cart
cancelCart.addEventListener('click', () => {
  // First verify the size of the screen ----- above 640px block and below flex
  if (window.innerWidth > 640) {
    cartArea.classList.remove('sm:block')
    cartArea.classList.add('sm:hidden')
  } else {
    cartArea.classList.add('hidden')
    cartArea.classList.remove('flex')
  }
})

// Open modal event
document.querySelectorAll('#menu-model').forEach((item) => {
  item.addEventListener('click', () => {
    // Get the id to identify the item in the fake json file
    const index = item.getAttribute('data-id')

    // Make the changes in the modal area in accord to the fake json file
    modalCount = 1
    modalCurrent = index
    modal.querySelector('#modal-quantity span').innerHTML = modalCount
    modal.querySelector('img').src = menu[index].img
    modal.querySelector('#modal-title').innerHTML = menu[index].title
    modal.querySelector('#modal-desc').innerHTML = menu[index].desc
    modal.querySelector('h2 span').innerHTML = menu[index].price

    // After changes where made open the modal area
    openModal()
  })
})

// Close modal button event
cancelModal.addEventListener('click', () => closeModal())

// Modal quantity plus event
quantityPlusModal.addEventListener('click', () => {
  // Increase the modal quantity and show on the button area
  modalCount++
  quantityModal.querySelector('span').innerHTML = modalCount
})

// Modal quantity minus event
quantityMinusModal.addEventListener('click', () => {
  // Check if the number is going to be less than zero
  if (modalCount > 1) {
    modalCount--
    quantityModal.querySelector('span').innerHTML = modalCount
  }
})
// Functions -----------------------------------

// Function to start the page
function startPage () {
  const menuInnerHTML = menu.map((item) => {
    // clone the model and configure it as it gets info of a fake API -> available.js
    const newItem = document.getElementById('menu-model').cloneNode(true)

    // Setting the item for the html
    newItem.setAttribute('data-id', item.id)
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

// Function to close the modal
function closeModal () {
  modal.classList.remove('flex')
  modal.classList.add('hidden')
}

// Function to open the modal
function openModal () {
  modal.classList.add('flex')
  modal.classList.remove('hidden')
}
