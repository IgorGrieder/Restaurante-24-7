// Initial Data
const menuDisplay = document.querySelector('#options-showcase')
const cartBox = document.getElementById('cart-box')
const cartArea = document.getElementById('cart-area')
const cartDisplay = document.getElementById('items-cart')
const cancelCart = document.getElementById('cancel-cart')
const modal = document.getElementById('modal-area')
const cancelModal = document.getElementById('cancel-modal')
const quantityModal = document.getElementById('modal-quantity')
const quantityPlusModal = document.getElementById('plus-modal')
const quantityMinusModal = document.getElementById('minus-modal')
const addCartModal = document.getElementById('add-cart-modal')
const all = document.getElementById('all')
const lunch = document.getElementById('lunch')
const breakfast = document.getElementById('breakfast')
const shakes = document.getElementById('shakes')
startPage()

// Variables to control information about the user interaction
const cartItems = []
let modalCurrent = null
let modalCount = 1
let cartCount = 0
let cartPriceTotal = 0
let cartPriceDiscount = 0
let cartPriceSubtotal = 0

// Evets ----------------------------------------------------------------------------------------------------------------------------------

// Open the cart on the top button ----------------------
cartBox.addEventListener('click', () => {
  // First verify the size of the screen ----- above 640px block and below flex
  updateCart()
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

    // Adding a animation for the mobile oppening
    cartArea.classList.add('opacity-0')
    setTimeout(() => {
      cartArea.classList.remove('opacity-0')
      cartArea.classList.add('opacity-1')
    }, 500)
  }
})

// Close cart ----------------------
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

// Open modal event ----------------------
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

// Close modal button event ----------------------
cancelModal.addEventListener('click', () => closeModal())

// Modal quantity plus event ----------------------
quantityPlusModal.addEventListener('click', () => {
  // Increase the modal quantity and show on the button area
  modalCount++
  quantityModal.querySelector('span').innerHTML = modalCount
})

// Modal quantity minus event ----------------------
quantityMinusModal.addEventListener('click', () => {
  // Check if the number is going to be less than zero
  if (modalCount > 1) {
    modalCount--
    quantityModal.querySelector('span').innerHTML = modalCount
  }
})

// Add to cart procedure ----------------------
addCartModal.addEventListener('click', () => {
  // Checking if the item is already in the cart
  if (cartItems.find((item) => item.id === menu[modalCurrent].id) !== undefined) {
    // Gets the index of the item and add the quantity
    const index = cartItems.findIndex((item) => item.id === menu[modalCurrent].id)
    cartItems[index].quantity = parseInt(cartItems[index].quantity) + modalCount
  } else {
    // Capturing information about the bought item
    const newItem = {
      id: menu[modalCurrent].id,
      title: menu[modalCurrent].title,
      img: menu[modalCurrent].img,
      price: menu[modalCurrent].price,
      quantity: modalCount
    }

    cartItems.push(newItem)
  }

  // Changing the cart icon on the top
  updateCartCount()

  // Adding/Openning the cart and closing the modal
  closeModal()
  openCart()
})

// Events to choose whats gonna be show in the menu ----------------------

// Display all
all.addEventListener('click', () => startPage())

// Display the breakfast options
breakfast.addEventListener('click', show('breakfast'))

// Display the lunch options
lunch.addEventListener('click', show('lunch'))

// Display the shakes options
shakes.addEventListener('click', show('shakes'))

// Functions ----------------------------------------------------------------------------------------------------------------------------------

// Function to start the page ----------------------
function startPage () {
  const menuInnerHTML = menu.map((item) => {
    // clone the model and configure it as it gets info of a fake API -> available.js
    const newItem = document.getElementById('menu-model').cloneNode(true)

    // Setting the item for the html
    newItem.setAttribute('data-id', item.id)
    newItem.querySelector('h1').innerHTML = item.title
    newItem.querySelector('img').src = item.img
    newItem.querySelector('h2 span').innerHTML = item.price
    newItem.querySelector('p').innerHTML = item.desc
    newItem.classList.add('reveal-animation')

    // returns the entire html of the element, including the div itself that has all the elements in it
    return newItem.outerHTML
  })

  // Joins the array and adds it to the menuDisplay
  const display = menuInnerHTML.join('')
  menuDisplay.innerHTML = display
}

// Function to close the modal ----------------------
function closeModal () {
  modal.classList.remove('opacity-1')
  modal.classList.remove('flex')
  modal.classList.add('hidden')
}

// Function to open the modal ----------------------
function openModal () {
  modal.classList.add('flex')
  modal.classList.remove('hidden')
  modal.classList.add('opacity-0')
  setTimeout(() => {
    modal.classList.remove('opacity-0')
    modal.classList.add('opacity-1')
  }, 200)
}

// Function to open the cart ----------------------
function openCart () {
  updateCart()
  // Check whats the size of teh screen to procedure
  if (window.innerWidth > 640) {
    cartArea.classList.remove('sm:hidden')
    cartArea.classList.add('sm:block')
  } else {
    cartArea.classList.remove('hidden')
    cartArea.classList.add('flex')
  }
}

// Function to load the cart with the current items ----------------------
function updateCart () {
  // Deleting the current information and adding the new one
  cartDisplay.innerHTML = ''
  cartPriceTotal = 0
  cartPriceDiscount = 0
  cartPriceSubtotal = 0

  cartItems.forEach((item, index) => {
    // clone the model and configure it as it gets info of a fake API -> available.js
    const newItem = document.getElementById('model-cart-items').cloneNode(true)

    // Setting the item for the html
    newItem.setAttribute('data-id', item.id)
    newItem.querySelector('h1').innerHTML = item.title
    newItem.querySelector('img').src = item.img
    newItem.querySelector('div span').innerHTML = item.quantity
    cartPriceSubtotal += (item.quantity * item.price)

    // Adding events to control the quantity/price of the cart items
    newItem.querySelector('.cart-control .plus-cart').addEventListener('click', () => {
      // Increase the quantity and reload the page
      item.quantity = parseInt(item.quantity) + 1
      cartCount++
      cartBox.querySelector('span').innerHTML = cartCount
      updateCart()
    })

    newItem.querySelector('.cart-control .minus-cart').addEventListener('click', () => {
      // Check if its going to delete the item from the cartItems
      if (parseInt(item.quantity) === 1) {
        cartItems.splice(index, 1)
      } else {
        item.quantity = parseInt(item.quantity) - 1
      }
      cartCount--
      cartBox.querySelector('span').innerHTML = cartCount
      updateCart()
    })
    // Adding each item to the cart properly
    cartDisplay.append(newItem)
  })

  // Price changes
  cartPriceDiscount = (cartPriceSubtotal * 0.1).toFixed(2)
  cartPriceTotal = (cartPriceSubtotal - cartPriceDiscount).toFixed(2)
  cartArea.querySelector('#subtotal span').innerHTML = cartPriceSubtotal
  cartArea.querySelector('#total span').innerHTML = cartPriceTotal
  cartArea.querySelector('#discount span').innerHTML = cartPriceDiscount
}

// Function to update the cart logo ----------------------
function updateCartCount () {
  cartCount = parseInt(cartCount) + parseInt(modalCount)
  cartBox.querySelector('span').innerHTML = cartCount
}

// Function to show the correspondent selected category ----------------------
function show (str) {
  const category = str
  return () => {
    const menuInnerHTML = menu.map((item) => {
      // Cheks if the product category is the right one selected
      if (item.category.toLowerCase() === category.toLowerCase()) {
        // clone the model and configure it as it gets info of a fake API -> available.js
        const newItem = document.getElementById('menu-model').cloneNode(true)

        // Setting the item for the html
        newItem.setAttribute('data-id', item.id)
        newItem.querySelector('h1').innerHTML = item.title
        newItem.querySelector('img').src = item.img
        newItem.querySelector('h2 span').innerHTML = item.price
        newItem.querySelector('p').innerHTML = item.desc
        newItem.classList.add('reveal-animation')

        // returns the entire html of the element, including the div itself that has all the elements in it
        return newItem.outerHTML
      } else return ''
    })

    // Joins the array and adds it to the menuDisplay
    const display = menuInnerHTML.join('')
    menuDisplay.innerHTML = display
  }
}
