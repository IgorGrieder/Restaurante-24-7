const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: 'Fluffy stacks of golden perfection, our buttermilk pancakes are a breakfast dream come true. Light and airy on the inside with a golden-brown crispiness on the edges, these pancakes are served with a generous drizzle of real maple syrup, making each bite a sweet symphony of flavors.'
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: 'Double the indulgence, double the satisfaction. The Diner Double is a hearty combination of succulent beef patties, melted cheese, crisp lettuce, and juicy tomatoes, all layered between soft, toasted brioche buns. It`s a classic diner experience, elevated to perfection.'
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: 'Brace yourself for the ultimate milkshake experience! The Godzilla Milkshake is an awe-inspiring blend of rich vanilla ice cream, swirls of chocolate syrup, and a mountain of whipped cream. Topped with colorful sprinkles and a cherry on top, this milkshake is a monster-sized treat for your taste buds.'
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: 'Take a trip to the countryside with our Country Delight. This dish features farm-fresh eggs, cooked to perfection and served alongside crispy hash browns, savory sausage links, and a medley of sautéed vegetables. It`s a hearty breakfast that feels like a warm embrace from the countryside.'
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: 'Get ready for a flavor explosion with our Egg Attack! This dish is a masterful combination of scrambled eggs, savory bacon, melted cheese, and a touch of zesty salsa, all encased in a warm tortilla. It`s a breakfast revolution that will leave your taste buds begging for more.'
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: 'Indulge your sweet tooth with our Oreo Dream dessert. This heavenly creation features layers of velvety Oreo-flavored mousse, crumbled Oreo cookies, and a drizzle of chocolate ganache. It`s a dreamy, chocolatey delight that will transport you to dessert paradise.'
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: 'For the bacon enthusiasts, the Bacon Overflow is a carnivore`s dream come true.Crispy bacon strips piled high, creating a tower of smoky goodness.Served with a side of tangy barbecue sauce, this dish is a celebration of all things bacon.'
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: 'Embrace the timeless flavors of the American Classic burger. Juicy beef patty, melted American cheese, fresh lettuce, tomato, and our special sauce, all sandwiched between a perfectly toasted sesame seed bun. It`s a true taste of the American culinary heritage.'
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: 'When times get tough, the Quarantine Buddy is here to lift your spirits. This comforting bowl of creamy macaroni and cheese is studded with crispy bacon bits and a hint of garlic. It`s the ultimate comfort food that feels like a warm hug on a plate.'
  }
]

/*
const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
});
*/

const names = menu.map((item) => item.title)
console.log(names)
